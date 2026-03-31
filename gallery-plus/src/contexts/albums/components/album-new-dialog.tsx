import { zodResolver } from "@hookform/resolvers/zod";
import type React from "react";
import { useForm } from "react-hook-form";
import SelectCheckboxIllustration from "../../../assets/images/select-checkbox.svg?react";
import Button from "../../../components/button";
import {
    Dialog,
    DialogBody,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "../../../components/dialog";
import InputText from "../../../components/input-text";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import PhotoImageSelectable from "../../photos/components/photo-image-selectable";
import usePhotos from "../../photos/hooks/use-photos";
import { albumNewFormSchema, type AlbumNewFormSchema } from "../schemas";

interface AlbumNewDialogProps extends React.ComponentProps<typeof Dialog> {
    trigger: React.ReactNode;
}

export default function AlbumNewDialog({ trigger }: AlbumNewDialogProps) {
    const form = useForm<AlbumNewFormSchema>({
        resolver: zodResolver(albumNewFormSchema),
    });
    const { photos, isLoadingPhotos } = usePhotos();

    function handleTogglePhoto(selected: boolean, photoId: string) {
        console.log(selected, photoId);
    }

    function handleSubmit(payload: AlbumNewFormSchema) {
        console.log(payload);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <DialogHeader>Criar álbum</DialogHeader>
                    <DialogBody className="flex flex-col gap-5">
                        <InputText
                            error={form.formState.errors.title?.message}
                            {...form.register("title")}
                            placeholder="Adicione um título"
                        />
                        <div className="flex flex-col gap-3">
                            <Text variant="label-small">Fotos cadastradas</Text>

                            {isLoadingPhotos && (
                                <div className="flex flex-wrap gap-2">
                                    {Array.from({ length: 4 }).map(
                                        (_, index) => (
                                            <Skeleton
                                                key={`photo-loading-${index}`}
                                                className="w-20 h-20 rounded"
                                            />
                                        ),
                                    )}
                                </div>
                            )}

                            {!isLoadingPhotos && photos.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {photos.map((photo) => (
                                        <PhotoImageSelectable
                                            key={photo.id}
                                            src={`${import.meta.env.VITE_IMAGES_URL}/${photo.imageId}`}
                                            title={photo.title}
                                            imageClassName="w-20 h-20 rounded-lg"
                                            onSelectImage={(selected) =>
                                                handleTogglePhoto(
                                                    selected,
                                                    photo.id,
                                                )
                                            }
                                        />
                                    ))}
                                </div>
                            )}

                            {!isLoadingPhotos && photos.length === 0 && (
                                <div
                                    className={`
                                w-full flex flex-col justify-center 
                                items-center gap-3
                            `}
                                >
                                    <SelectCheckboxIllustration />
                                    <Text
                                        variant="paragraph-medium"
                                        className="text-center"
                                    >
                                        Nenhuma foto disponível para seleção
                                    </Text>
                                </div>
                            )}
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <DialogClose>
                            <Button type="button" variant="secondary">
                                Cancelar
                            </Button>
                        </DialogClose>
                        <Button type="submit">Criar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
