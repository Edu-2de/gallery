import Text from "../../../components/text";
import type { Photo } from "../models/photo";
import PhotoWidget from "./photo-widget";

interface PhotosListProps {
    photos: Photo[];
    loading?: boolean;
}

export default function PhotosList({ photos, loading }: PhotosListProps) {
    return (
        <div>
            {!loading && photos?.length > 0 && (
                <div className="grid grid-cols-5 gap-9">
                    {photos.map((photo) => (
                        <PhotoWidget key={photo.id} photo={photo} />
                    ))}
                </div>
            )}
            {loading && (
                <div className="grid grid-cols-5 gap-9">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <PhotoWidget
                            key={`photo-loading-${index}`}
                            photo={{} as Photo}
                            loading
                        />
                    ))}
                </div>
            )}
            {!loading && photos?.length === 0 && (
                <div className="flex justify-center items-center h-full">
                    <Text variant="paragraph-large" className="text-accent-red">
                        Nenhuma foto encontrada!
                    </Text>
                </div>
            )}
        </div>
    );
}
