import React from "react";
import ImagePreview from "../../../components/image-preview";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";
import InputCheckbox from "../../../components/input-checkbox";

export const photoImageSelectableVariants = tv({
    base: `cursor-pointer relative rounded-lg`,
    variants: {
        select: {
            true: "outline-2 outline-accent-brand",
        },
    },
});

interface PhotoImageSelectableProps
    extends
        VariantProps<typeof photoImageSelectableVariants>,
        React.ComponentProps<typeof ImagePreview> {
    selected?: boolean;
}

export default function PhotoImageSelectable({
    selected,
    className,
    ...props
}: PhotoImageSelectableProps) {
    const [isSelected, setIsSelected] = React.useState(selected);

    return (
        <div
            className={photoImageSelectableVariants({
                className,
                select: isSelected,
            })}
        >
            <InputCheckbox
                size="sm"
                defaultChecked={isSelected}
                onClick={() => setIsSelected(!isSelected)}
            />
            <ImagePreview {...props} />
        </div>
    );
}
