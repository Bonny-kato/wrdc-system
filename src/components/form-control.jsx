import React, {forwardRef, useEffect, useRef} from "react"

export const Input = (
    {
        register, name,
        type = "text",
        label = "filed label",
        onChange = null,
        defaultValue = "",
        placeholder="",
        errorMessage = null,
        required=true,
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
           <div className={'flex justify-between items-center'}>
               <label htmlFor={name} className={'text-sm capitalize'}>{label}</label>
               {!required && <span className={'text-xs opacity-80'}>( Optional )</span>}
           </div>
            <input
                ref={inputRef}
                {...register(name)}
                placeholder={placeholder}
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
            <option disabled={true} value="">Choose ..</option>
            {children}
        </select>
    </>
));