import type React from "react";
import {
    Dialog,
    DialogBody,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "../../../components/dialog";
import Button from "../../../components/button";
import InputText from "../../../components/input-text";
import Text from "../../../components/text";
import type { Photo } from "../../photos/models/photo";
import SelectCheckboxIllustration from "../../../assets/images/select-checkbox.svg?react";
import Skeleton from "../../../components/skeleton";
import PhotoImageSelectable from "../../photos/components/photo-image-selectable";

interface AlbumNewDialogProps extends React.ComponentProps<typeof Dialog> {
    trigger: React.ReactNode;
}

export default function AlbumNewDialog({ trigger }: AlbumNewDialogProps) {
    const isLoadingPhotos = false;
    const photos: Photo[] = [
        {
            id: "1",
            title: "titulo1",
            imageId: "portrait-tower.png",
            albums: [
                { id: "1", title: "album1" },
                { id: "2", title: "album2" },
                { id: "3", title: "album3" },
            ],
        },
        {
            id: "2",
            title: "titulo2",
            imageId: "portrait-tree.png",
            albums: [
                { id: "1", title: "album1" },
                { id: "2", title: "album2" },
                { id: "3", title: "album3" },
            ],
        },
        {
            id: "3",
            title: "titulo3",
            imageId: "square-breakfast.png",
            albums: [
                { id: "1", title: "album1" },
                { id: "2", title: "album2" },
                { id: "3", title: "album3" },
            ],
        },
    ];

    function handleTogglePhoto(selected: boolean, photoId: string) {
        console.log(selected, photoId);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>Criar álbum</DialogHeader>
                <DialogBody className="flex flex-col gap-5">
                    <InputText placeholder="Adicione um titúlo" />
                    <div className="flex flex-col gap-3">
                        <Text variant="label-small">Fotos cadastradas</Text>

                        {isLoadingPhotos && (
                            <div className="flex flex-wrap gap-2">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <Skeleton
                                        key={`photo-loading-${index}`}
                                        className="w-20 h-20 rounded"
                                    />
                                ))}
                            </div>
                        )}

                        {!isLoadingPhotos && photos.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {photos.map((photo) => (
                                    <PhotoImageSelectable
                                        key={photo.id}
                                        src={`/images/${photo.imageId}`}
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
                        <Button variant="secondary">Cancelar</Button>
                    </DialogClose>
                    <Button>Criar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
