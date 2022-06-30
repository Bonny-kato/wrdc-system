import {CSVLink} from "react-csv";


const ExportJsonToExcel = ({jsonData = [], filename = "generatedName",}) => {
    return (
        <CSVLink
            data={jsonData}
            filename={filename}
            className={`
                    px-2  text-accent4 space-x-2 py-2 text-xs 
                    uppercase border-[1px] border-accent4 group flex tracking-wider
                    hover:bg-[#349eff]/20  transition-all duration-300 cursor-pointer 
                    rounded  justify-center items-center`
        }>
            Export To Excel
        </CSVLink>
    )
}
export default ExportJsonToExcel;