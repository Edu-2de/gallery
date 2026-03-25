import type React from "react";
import type { Album } from "../models/albums";
import type { Photo } from "../../photos/models/photo";
import Text from "../../../components/text";
import InputCheckbox from "../../../components/input-checkbox";
import Divider from "../../../components/divider";

interface AlbumsListSelectable extends React.ComponentProps<"div"> {
    loading?: boolean;
    albums: Album[];
    photo: Photo;
}

export default function AlbumsListSelectable({
    loading,
    albums,
    photo,
    ...props
}: AlbumsListSelectable) {
    return (
        <ul className="flex flex-col gap-4">
            {albums.map((album, index) => (
                <li key={album.id}>
                    <div className="flex items-center justify-between gap-1">
                        <Text variant="paragraph-large" className="truncate">
                            {album.title}
                        </Text>
                        <InputCheckbox />
                    </div>
                    {index !== albums.length - 1 && (
                        <Divider className="mt-4" />
                    )}
                </li>
            ))}
        </ul>
    );
}
