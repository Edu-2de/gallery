import Container from "../components/container";
import PhotosList from "../contexts/photos/components/photos-list";

export default function PageHome() {
    return (
        <Container>
            <PhotosList
                photos={[
                    {
                        id: "123",
                        title: "ola mundo!",
                        imageId: "portrait-tower.png",
                        albums: [
                            { id: "321", title: "seila" },
                            { id: "126", title: "outro" },
                            { id: "423", title: "outro" },
                        ],
                    },
                ]}
            />
        </Container>
    );
}
