import type React from "react";
import Skeleton from "../../../components/skeleton";
import ButtonIcon from "../../../components/button-icon";
import ArrowLeftIcon from "../../../assets/icons/chevron-left.svg?react";
import ArrowRightIcon from "../../../assets/icons/chevron-right.svg?react";
import Button from "../../../components/button";
import { useNavigate } from "react-router";

interface PhotoNavigatorProps extends React.ComponentProps<"div"> {
    previousPhotoId?: string;
    nextPhotoId?: string;
    loading?: boolean;
}

export default function PhotoNavigator({
    previousPhotoId,
    nextPhotoId,
    loading,
    ...props
}: PhotoNavigatorProps) {
    const navigate = useNavigate();

    return (
        <div className="flex gap-2" {...props}>
            {!loading ? (
                <>
                    <ButtonIcon
                        icon={ArrowLeftIcon}
                        variant="secondary"
                        onClick={() => {
                            navigate(`/fotos/${previousPhotoId}`);
                        }}
                        disabled={!previousPhotoId}
                    />
                    <Button
                        icon={ArrowRightIcon}
                        variant="secondary"
                        onClick={() => {
                            navigate(`/fotos/${nextPhotoId}`);
                        }}
                        disabled={!nextPhotoId}
                    >
                        Próxima imagem
                    </Button>
                </>
            ) : (
                <>
                    <Skeleton className="w-10 h-10" />
                    <Skeleton className="w-20 h-10" />
                </>
            )}
        </div>
    );
}
