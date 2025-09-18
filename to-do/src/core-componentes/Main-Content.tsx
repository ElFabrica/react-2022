import type React from "react";
import { cx } from "class-variance-authority"

interface MainComponentProps extends React.ComponentProps<"main"> {

}

export default function MainContent({
    children,
    className,
    ...props
}: MainComponentProps) {
    return (
    <main className={cx("mr-4 md:mt-8", className)} {...props}>
        {children}
    </main>
)

}