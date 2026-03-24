import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotosList from "../contexts/photos/components/photos-list";

export default function PageHome() {
    return (
        <Container>
            <AlbumsFilter
                albums={[
                    { id: "1", title: "album1" },
                    { id: "2", title: "album2" },
                    { id: "3", title: "album3" },
                ]}
                className="mb-9"
                
            />

            <PhotosList
                photos={[
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
                        imageId: "portrait-tower.png",
                        albums: [
                            { id: "1", title: "album1" },
                            { id: "2", title: "album2" },
                            { id: "3", title: "album3" },
                        ],
                    },
                    {
                        id: "3",
                        title: "titulo3",
                        imageId: "portrait-tower.png",
                        albums: [
                            { id: "1", title: "album1" },
                            { id: "2", title: "album2" },
                            { id: "3", title: "album3" },
                        ],
                    },
                ]}
            />
        </Container>
    );
}
