import Skeleton from "../../../components/skeleton";
import type { Photo } from "../models/photo";
import PhotoWidget from "./photo-widget";

interface PhotosListProps {
    photos: Photo[];
    loading?: boolean;
}

export default function PhotosList({ photos, loading }: PhotosListProps) {
    return (
        <div>
            <div className="grid grid-cols-5 gap-9">
                {!loading &&
                    photos?.length > 0 &&
                    photos.map((photo) => (
                        <PhotoWidget key={photo.id} photo={photo} />
                    ))}
                {loading && 
                    <Skeleton />
                }
            </div>
        </div>
    );
}
