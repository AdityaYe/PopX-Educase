import './Button.css'

const Button = ({
    children,
    variant = "primary",
    fullwidth = true,
    className = '',
    ...props
}) => {
    return (
        <button
            className={`custom-btn btn-${variant} ${fullwidth ? 'btn-full' : ''} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;
