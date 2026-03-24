import type React from "react";
import { tv } from "tailwind-variants";

export const imageFilePreviewVarianst = tv({
    base: `
        rounded-lg overflow-hidden
    `,
});

export const imageFilePeviewImageVariants = tv({
    base: `
        w-full h-full object-cover
    `,
});

interface ImageFilePreviewProps extends React.ComponentProps<"img"> {
    imageClassName?: string;
}

export default function ImageFilePreview({
    className,
    imageClassName,
    ...props
}: ImageFilePreviewProps) {
    return (
        <div className={imageFilePreviewVarianst({ className })}>
            <img
                className={imageFilePeviewImageVariants({
                    className: imageClassName,
                })}
                {...props}
            />
        </div>
    );
}
