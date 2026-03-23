import { useParams } from "react-router";
import Text from "../components/text";

export default function PagePhotoDetail() {
    const {id} = useParams();

    return (
        <>
            <Text variant="heading-medium">Pagina de detalhe da foto</Text>
            <hr/>
            <Text variant="heading-medium">Id da foto: {id}</Text>
        </>
    );
}
