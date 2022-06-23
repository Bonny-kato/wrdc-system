import React from "react"
const Month = ({month}) => {
    return (
        <div className={' grid grid-cols-7 grid-rows-5 bg-red-500'}>
            {month.map((row, i)=>(
                <React.Fragment key={i}>
                    {row.map((day, idx) =>(
                        <div>nam</div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}
export default Month;