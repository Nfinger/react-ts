export interface IButtonProps {
    type?: "button" | "submit" | "reset" | undefined
    className?: string | undefined
    text: string
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}