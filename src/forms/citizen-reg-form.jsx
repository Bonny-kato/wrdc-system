import { CSVLink } from "react-csv";



const ExportJsonToExcel = ({jsonData=[], filename="generatedName", }) => {
    return (
        <CSVLink
            data={jsonData}
            filename={filename}
            className={"px-4 text-xs flex items-center hover:bg-blue-600/50 hover:text-white transition ease-in-out uppercase py-3 border-[2px] border-blue-600  text-blue-500 font-semibold rounded"} >
          Export To Excel
        </CSVLink>
    )
}
export default ExportJsonToExcel;