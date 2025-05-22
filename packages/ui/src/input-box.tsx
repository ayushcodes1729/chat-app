interface InputBoxProps {
    placeholder: string,
    size: 'small' | 'medium' | 'large'
}

export function InputBox({
    placeholder,
    size
}: InputBoxProps) {
    return (
            <input
                type="text"
                placeholder={placeholder}
                className={`border-2 border-gray-300 rounded-lg p-2 ${size === 'small' ? 'w-32 h-12 text-lg' : size === 'medium' ? 'w-64 h-16 text-2xl' : 'w-96 h-20 text-3xl'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
    );
}