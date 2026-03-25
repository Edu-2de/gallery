import Container from "../components/container";
import Text from "../components/text";
import type { Photo } from "../contexts/photos/models/photo";
import Skeleton from "../components/skeleton";
import PhotoNavigator from "../contexts/photos/components/photo-navigator";
import ImagePreview from "../components/image-preview";
import Button from "../components/button";
import AlbumsListSelectable from "../contexts/albums/components/albums-list-selectable";

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
                    <Text as="h2" variant="heading-large">
                        {photo?.title}
                    </Text>
                ) : (
                    <Skeleton className="w-48 h-8" />
                )}

                <PhotoNavigator loading={isLoadingPhoto} />
            </header>

            <div className="grid grid-cols-[21rem_1fr] gap-24">
                <div className="space-y-3">
                    {!isLoadingPhoto ? (
                        <ImagePreview
                            src={`/images/${photo?.imageId}`}
                            title={photo.title}
                            imageClassName="h-[21rem]"
                        />
                    ) : (
                        <Skeleton className="h-[21rem]" />
                    )}
                    {!isLoadingPhoto ? (
                        <Button variant="destructive">Excluir</Button>
                    ) : (
                        <Skeleton className="w-20 h-10" />
                    )}
                </div>

                <div className="py-3">
                    <Text as="h3" variant="heading-medium" className="mb-7">
                        Álbuns
                    </Text>

                    <AlbumsListSelectable
                        photo={photo}
                        albums={photo.albums}
                        loading={isLoadingPhoto}
                    />
                </div>
            </div>
        </Container>
    );
}
