import './InputField.css';

const InputField = ({
    label,
    required = false,
    error,
    containerClassName = '',
    className = '',
    type = 'text',
    options = [],
    value,
    onChange,
    ...props
}) => {
    if (type === 'radio') {
        return (
            <div className={`radio-group-container ${containerClassName}`}>
                <label className='radio-group-title'>
                    {label}
                    {required && <span className='required-star'>*</span>}
                </label>
                <div className='radio-options'>
                    {options.map((option) => (
                        <label key={option.value} className='radio-label'>
                            <input
                                type='radio'
                                className={`radio-input ${className}`}
                                value={option.value}
                                checked={value === option.value}
                                onChange={onChange}
                                {...props}
                            />
                            <span className='radio-custom'></span>
                            {option.label}
                        </label>
                    ))}
                </div>
                {error && <span className='error-message'>{error}</span>}
            </div>
        )
    }

    return (
        <div className={`input-container ${error ? 'has-error' : ''} ${containerClassName}`}>
            {label && (
                <label className='input-label'>
                    {label}
                    {required && <span className='required-star'>*</span>}
                </label>
            )}
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`input-element ${className}`}
                {...props}
            />
            {error && <span className='error-message'>{error}</span>}
        </div>
    )
}

export default InputField;
