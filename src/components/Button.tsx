import React from 'react'

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined
    className?: string | undefined
    text: string
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const Button = ({
    type,
    className,
    text,
    onClick
}: ButtonProps) => (
    <button
        type={type}
        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        onClick={onClick}
    >
        {text}
    </button>
)
