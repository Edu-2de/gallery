import type { Album } from "../../albums/models/albums";

export interface Photo {
    id: string;
    title: string;
    imageId: string;
    albums: Album[];
}
