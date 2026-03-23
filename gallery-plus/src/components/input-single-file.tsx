import type React from "react";
import { type VariantProps, tv } from "tailwind-variants";
import Icon from "./icon";
import Text from "./text";
import FileIcon from "../assets/icons/upload-file.svg?react";

export const inputSingleFileVariants = tv({
    base: `
        flex flex-col justify-center items-center w-full
        border border-solid border-border-primary
        group-hover:border-border-active 
         rounded-lg
    `,
});

interface InputSingleFileProps
    extends
        VariantProps<typeof inputSingleFileVariants>,
        React.ComponentProps<"div"> {}

export default function InputSingleFile({ ...props }: InputSingleFileProps) {
    return (
        <div>
            <div className="w-full relative group cursor-pointer">
                <input
                    type="file"
                    className={`
                        absolute top-0 right-0 w-full h-full 
                        opacity-0 cursor-pointer 
                    `}
                />
                <div className={inputSingleFileVariants()} {...props}>
                    <Icon svg={FileIcon} className="w-8 h-8 fill-placeholder" />
                    <Text variant="label-medium" className="text-placeholder">
                        Arraste o arquivo aqui
                        <br />
                        ou clique para selecionar
                    </Text>
                </div>
            </div>
        </div>
    );
}
