const SpinLoader = ({size="small", color}) => {
    return (
        <div className={`
            ${size === 'small' && 'h-4 w-4 '} 
            ${size === 'medium' && 'h-6 w-6 '} 
            ${size === 'large' && 'h-8 w-8 '} 
            ${size === 'extra-large' && 'h-12 w-12 '} 
            ${color ? `border-[${color}]` : 'border-blue-600 '}
            border-[2px] rounded-full 
            border-t-transparent animate-spin`}>
        </div>
    )
}
export default SpinLoader;