import Container from "../components/container";
import Text from "../components/text";
import type { Photo } from "../contexts/photos/models/photo";
import Skeleton from "../components/skeleton";

export default function PagePhotoDetail() {
    const isLoadingPhoto = false;
    const photo = {} as Photo;

    return (
        <Container>
            <header className="flex justify-between items-center gap-8 mb-8">
                {!isLoadingPhoto ? (
                    <Text variant="heading-large">{photo?.title}</Text>
                ) : (
                    <Skeleton className="w-48 h-8" />
                )}
            </header>
        </Container>
    );
}
