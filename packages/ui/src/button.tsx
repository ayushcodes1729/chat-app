interface ButtonProps {
    name: string,
    variant: 'primary' | 'secondary' | 'tertiary',
    size: 'small' | 'medium' | 'large',
    onclick: (e: any) => void,
}

export const Button = ({
    name,
    variant,
    size,
    onclick
}: ButtonProps) => {
    return (
        <button
            className={`bg-blue-400 text-white font-bold py-2 px-4 rounded ${variant === 'primary' ? 'bg-blue-500 hover:bg-blue-700' : variant === 'secondary' ? 'bg-gray-500 hover:bg-gray-700' : 'bg-green-500 hover:bg-green-700'} ${size === 'small' ? 'w-32 h-12' : size === 'medium' ? 'w-64 h-16' : 'w-96 h-20'} focus:outline-none focus:ring-2 focus:ring-blue-300`}
            onClick={onclick}
        >
            {name}
        </button>
    )
}