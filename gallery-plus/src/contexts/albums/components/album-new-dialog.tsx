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

interface AlbumNewDialogProps extends React.ComponentProps<typeof Dialog> {
    trigger: React.ReactNode;
}

export default function AlbumNewDialog({ trigger }: AlbumNewDialogProps) {
    const isLoadingPhotos = false;
    const photos: Photo[] = [];

    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>Criar álbum</DialogHeader>
                <DialogBody className="flex flex-col gap-5">
                    <InputText placeholder="Adicione um titúlo" />
                    <div className="space-y-3">
                        <Text variant="label-small">Fotos cadastradas</Text>
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
