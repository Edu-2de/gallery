import type React from "react";
import { tv } from "tailwind-variants";

export const imagePreviewVarianst = tv({
    base: `
        rounded-lg overflow-hidden
    `,
});

export const imagePeviewImageVariants = tv({
    base: `
        w-full h-full object-cover
    `,
});

interface ImagePreviewProps extends React.ComponentProps<"img"> {
    imageClassName?: string;
}

export default function ImagePreview({
    className,
    imageClassName,
    ...props
}: ImagePreviewProps) {
    return (
        <div className={imagePreviewVarianst({ className })}>
            <img
                className={imagePeviewImageVariants({
                    className: imageClassName,
                })}
                {...props}
            />
        </div>
    );
}
