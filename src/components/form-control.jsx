import React, {forwardRef, useEffect, useRef} from "react"

export const Input = (
    {
        register, name,
        type = "text",
        label = "filed label",
        onChange = null,
        defaultValue = "",
        errorMessage = null,
        isError = false,
    }) => {
    const inputRef = useRef(null)

    useEffect(() => {
        if (inputRef.current && isError) {
            inputRef.current.focus();
        }
    }, [isError])

    return (
        <>
            <label htmlFor={name} className={'text-sm capitalize'}>{label}</label>
            <input
                ref={inputRef}
                {...register(name)}
                onChange={(e) => {
                    onChange && onChange(e.target.value)
                }}
                type={type} defaultValue={defaultValue}
                className={`rounded-md focus:ring-blue-600/80 focus:ring-2 focus:ring-blue-600/80 outline-none text-sm bg-secondary/10 p-3`}/>
            {(isError && errorMessage) && <p className={'text-red-700  -mt-1 text-xs font-light capitalize'}> {errorMessage}</p>}
        </>
    )
}


export const Option = ({value, onClick, text=""}) => {
    return (
        <option onClick={onClick} value={value} className={'capitalize'}> {text ? text : value}</option>
    )
}

export const Select = forwardRef(({onChange, onBlur, name, label, defautlValue = "", children}, ref) => (
    <>
        <label htmlFor={label} className={'text-sm capitalize'}>{label}</label>
        <select name={name} ref={ref}
                defaultValue={defautlValue}
                className={'rounded-md outline-none focus:ring-2 focus:ring-blue-600/80 capitalize text-sm bg-secondary/10 p-3'}
                onChange={onChange} onBlur={onBlur}>
            <option disabled={true} value="90">Choose ..</option>
            {children}
        </select>
    </>
));