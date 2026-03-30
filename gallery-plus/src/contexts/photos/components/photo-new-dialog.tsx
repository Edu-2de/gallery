import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import React from "react";
import { useForm } from "react-hook-form";
import Alert from "../../../components/alert";
import Button from "../../../components/button";
import {
    Dialog,
    DialogBody,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "../../../components/dialog";
import ImagePreview from "../../../components/image-preview";
import InputSingleFile from "../../../components/input-single-file";
import InputText from "../../../components/input-text";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import useAlbums from "../../albums/hooks/use-albums";
import usePhoto from "../hooks/use-photo";
import { photoNewFormSchema, type PhotoNewFormSchema } from "../schemas";

interface PhotoNewDialogProps extends React.ComponentProps<typeof Dialog> {
    trigger: React.ReactNode;
    loading?: boolean;
}

export default function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
    const { albums, isLoadingAlbums } = useAlbums();
    const [modalOpen, setModalOpen] = React.useState(false);
    const { createPhoto } = usePhoto();
    const [isCreatingPhoto, setIsCreatingPhoto] = React.useTransition();

    const form = useForm<PhotoNewFormSchema>({
        resolver: zodResolver(photoNewFormSchema),
    });

    const file = form.watch("file");
    const fileSrc = file?.[0] ? URL.createObjectURL(file[0]) : undefined;

    const albumsIds = form.watch("albumsIds");

    React.useEffect(() => {
        if (!modalOpen) {
            form.reset();
        }
    }, [modalOpen, form]);

    function handleToggleAlbum(albumId: string) {
        const albumIds = form.getValues("albumsIds") || [];
        const albumsSet = new Set(albumIds);

        if (albumsSet.has(albumId)) {
            albumsSet.delete(albumId);
        } else {
            albumsSet.add(albumId);
        }

        form.setValue("albumsIds", Array.from(albumsSet));
    }

    function handleSubmit(payload: PhotoNewFormSchema) {
        setIsCreatingPhoto(async () => {
            await createPhoto(payload);
            setModalOpen(false);
        });
    }

    return (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <DialogHeader>Adicionar Foto</DialogHeader>
                    <DialogBody className="flex flex-col gap-5">
                        <InputText
                            error={form.formState.errors.title?.message}
                            {...form.register("title")}
                            placeholder="Adicione um título"
                            maxLength={255}
                        />
                        <Alert>
                            Tamanho máximo: 50MB
                            <br />
                            Voce pode selecionar arquivo PNG, JPG ou JPEG
                        </Alert>
                        <InputSingleFile
                            error={form.formState.errors.file?.message}
                            {...form.register("file")}
                            form={form}
                            allowedExtensions={["png", "jpg", "jpeg"]}
                            maxFileSizeInMB={50}
                            replaceBy={
                                <ImagePreview
                                    src={fileSrc}
                                    className="w-full h-56"
                                />
                            }
                        />
                        <div className="flex flex-col gap-3 ">
                            <Text variant="label-small">Selecionar álbuns</Text>
                            <div className="flex flex-wrap gap-3">
                                {!isLoadingAlbums &&
                                    albums.length > 0 &&
                                    albums.map((album) => (
                                        <Button
                                            key={album.id}
                                            variant={
                                                albumsIds?.includes(album.id)
                                                    ? "primary"
                                                    : "ghost"
                                            }
                                            size="sm"
                                            className="truncate"
                                            onClick={() =>
                                                handleToggleAlbum(album.id)
                                            }
                                        >
                                            {album.title}
                                        </Button>
                                    ))}
                                {isLoadingAlbums &&
                                    Array.from({ length: 5 }).map(
                                        (_, index) => (
                                            <Skeleton
                                                className="h-7 w-20"
                                                key={`album-loading-${index}`}
                                            />
                                        ),
                                    )}
                            </div>
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="secondary">Cancelar</Button>
                        </DialogClose>
                        <Button type="submit">
                            {isCreatingPhoto ? "Adicionando" : "Adicionar"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
