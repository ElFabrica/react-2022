import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const skeletonVariants = cva(`
    animate-pulse bg-gray-200 pointer-events-none
    `,
{
    variants:{
        roudend:{
            sm: "rounded-sm",
            lg: "rounded-lg",
            full: "rounded-full"
        }
    },
    defaultVariants:{
        roudend: "lg"
    }
})

interface SkeletonProps extends VariantProps<typeof skeletonVariants>, 
React.ComponentProps<"div"> {

}

export default function Skeleton({roudend, className , ...props}: SkeletonProps){
    return <div className={skeletonVariants({roudend, className})}
    {...props}
    />
}