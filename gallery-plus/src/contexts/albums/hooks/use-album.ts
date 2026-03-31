import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { api } from "../../../helpers/api";
import type { Album } from "../models/albums";
import type { AlbumNewFormSchema } from "../schemas";

export default function useAlbum() {
    const queryClient = useQueryClient();

    async function createAlbum(payload: AlbumNewFormSchema) {
        try {
            const { data: album } = await api.post<Album>("albums", {
                title: payload.title,
            });

            if (payload.photosIds && payload.photosIds.length > 0) {
                await Promise.all(
                    payload.photosIds.map((photoId) => {
                        return api.put(`/photos/${photoId}/albums`, {
                            albumsIds: [album.id],
                        });
                    }),
                );
            }

            queryClient.invalidateQueries({ queryKey: ["albums"] });
            queryClient.invalidateQueries({ queryKey: ["photos"] });

            toast.success("Álbum criado com sucesso!");
        } catch (error) {
            toast.error("Erro ao criar álbum");
            throw error;
        }
    }

    return {
        createAlbum,
    };
}
