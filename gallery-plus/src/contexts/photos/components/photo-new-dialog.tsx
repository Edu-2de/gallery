import type React from "react";
import {
    Dialog,
    DialogBody,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "../../../components/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import Button from "../../../components/button";
import InputText from "../../../components/input-text";
import Alert from "../../../components/alert";
import InputSingleFile from "../../../components/input-single-file";
import ImagePreview from "../../../components/image-preview";
import Text from "../../../components/text";
import Skeleton from "../../../components/skeleton";
import { useForm } from "react-hook-form";
import useAlbums from "../../albums/hooks/use-albums";

interface PhotoNewDialogProps extends React.ComponentProps<typeof Dialog> {
    trigger: React.ReactNode;
    loading?: boolean;
}

export default function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
    const form = useForm();
    const { albums, isLoadingAlbums } = useAlbums();

    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>Adicionar Foto</DialogHeader>
                <DialogBody className="flex flex-col gap-5">
                    <InputText
                        placeholder="Adicione um título"
                        maxLength={255}
                    />
                    <Alert>
                        Tamanho máximo: 50MB
                        <br />
                        Voce pode selcionar arquivo PNG, JPG ou JPEG
                    </Alert>
                    <InputSingleFile
                        form={form}
                        allowedExtensions={["png", "jpg", "jpeg"]}
                        maxFileSizeInMB={50}
                        replaceBy={<ImagePreview className="w-full h-56" />}
                    />
                    <div className="flex flex-col gap-3 ">
                        <Text variant="label-small">Selecionar albuns</Text>
                        <div className="flex flex-wrap gap-3">
                            {!isLoadingAlbums &&
                                albums.length > 0 &&
                                albums.map((album) => (
                                    <Button
                                        key={album.id}
                                        variant="ghost"
                                        size="sm"
                                        className="truncate"
                                    >
                                        {album.title}
                                    </Button>
                                ))}
                            {isLoadingAlbums &&
                                Array.from({ length: 5 }).map((_, index) => (
                                    <Skeleton
                                        className="h-7 w-20"
                                        key={`album-loading-${index}`}
                                    />
                                ))}
                        </div>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Cancelar</Button>
                    </DialogClose>
                    <Button variant="primary">Adicionar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
