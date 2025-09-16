import Skeleton from "./Skeleton";
import Text from "./Text";
import {cva, cx, type VariantProps} from "class-variance-authority"

export const badgeVarians = cva("inline-flex items-center justify-center rounded-full",{
    variants:{
        variant:{
            none: "", 
            primary: "bg-green-light",
            secondary: "bg-pink-light "
        },
        size:{
            sm: "py-0.5  px-2"
        }
    },
    defaultVariants:{
        variant: "primary",
        size: "sm"
    }
})

export const badgeTextVariants = cva("",{
    variants:{
        variant:{
            none: "", 
            primary: "text-green-dark",
            secondary: "text-pink-dark"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

export const badgeSkeletonVariants=cva(``,
    {
        variants:{
            size: {
                sm: "w-5 h-6"
            }
        },
        defaultVariants:{
            size:"sm"
        }})


interface BadgeProps extends React.ComponentProps<"div">, VariantProps <typeof badgeVarians>{
    loading?: boolean
}

export default function Badge({
    variant,
    size,
    className,
    children,
    loading,
    ...props
}: BadgeProps){
    if(loading){
        return<Skeleton 
        roudend="full"
        className={cx(badgeVarians({variant: "none"}),
            badgeSkeletonVariants({size}),
            className 
        )}
        />
    }


    return(
        <div className={badgeVarians({variant, size, className})} {...props}>
        <Text variant={"body-md-bold"} className={badgeTextVariants({variant})}>{children}</Text>
        </div>
    )
}