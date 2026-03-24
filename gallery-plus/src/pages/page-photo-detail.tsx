import Container from "../components/container";
import Text from "../components/text";
import type { Photo } from "../contexts/photos/models/photo";
import Skeleton from "../components/skeleton";
import PhotoNavigator from "../contexts/photos/components/photo-navigator";
import ImagePreview from "../components/image-preview";

export default function PagePhotoDetail() {
    const isLoadingPhoto = false;
    const photo = {
        id: "1",
        title: "titulo1",
        imageId: "portrait-tower.png",
        albums: [
            { id: "1", title: "album1" },
            { id: "2", title: "album2" },
            { id: "3", title: "album3" },
        ],
    } as Photo;
    return (
        <Container>
            <header className="flex justify-between items-center gap-8 mb-8">
                {!isLoadingPhoto ? (
                    <Text variant="heading-large">{photo?.title}</Text>
                ) : (
                    <Skeleton className="w-48 h-8" />
                )}

                <PhotoNavigator />
            </header>

            <div className="grid grid-cols-[21rem] gap-24">
                <div className="flex flex-col gap-3">
                    <ImagePreview src={`/images/${photo?.imageId}`} title={photo.title} />
                </div>
            </div>
        </Container>
    );
}
