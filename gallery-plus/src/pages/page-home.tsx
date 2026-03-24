import Container from "../components/container";
import PhotoWidget from "../contexts/photos/components/photo-widget";

export default function PageHome() {
    return (
        <>
            <Container>
                <PhotoWidget
                    photo={{
                        id: "123",
                        title: "ola mundo!",
                        imageId: "portrait-tower.png",
                        albums: [
                            { id: "321", title: "seila" },
                            { id: "126", title: "outro" },
                            { id: "423", title: "outro" },
                        ],
                    }}
                />
            </Container>
        </>
    );
}
