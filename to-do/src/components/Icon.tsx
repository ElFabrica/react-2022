import React from "react"
import {cva, type VariantProps} from "class-variance-authority"

export const icoVariants = cva("", {
    variants: {
        animate:{
            false: "",
            true: "animate-spin"
        }
    },
    defaultVariants: {
        animate: false
    }
}) 

interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof icoVariants >{
    svg: React.FC<React.ComponentProps<"svg">>    
}

export default function Icon({svg: SvgComponent,className, animate,...props}: IconProps){
    return <SvgComponent className={icoVariants({animate, className})}{...props}/>
}