import Container from "../components/container";
import PhotoWidget from "../contexts/photos/components/photo-widget";
import type { Photo } from "../contexts/photos/models/photo";

export default function PageHome() {
    return (
        <Container>
            <div className="grid grid-cols-5 gap-9">
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
                <PhotoWidget photo={{} as Photo} loading />
            </div>
        </Container>
    );
}
