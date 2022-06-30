import React from "react";
import FileSaver from "file-saver";
import * as XLSX from "xlsx";
import {formatDate, parseCitizensData} from "../utils";
import {useGlobalContext} from "../context/global-context";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";

const ExportToXLSX = ({fileName}) => {
    const {citizensGroups} = useGlobalContext();
    const {elders, youth, children, male, female, disability} = citizensGroups;
    console.log("INSIDE", citizensGroups)

    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const exportToCSV = () => {
        const eldersSheet = XLSX.utils.json_to_sheet(parseCitizensData(elders));
        const youthSheet = XLSX.utils.json_to_sheet(parseCitizensData(youth));
        const childrenSheet = XLSX.utils.json_to_sheet(parseCitizensData(children));
        const maleSheet = XLSX.utils.json_to_sheet(parseCitizensData(male));
        const femaleSheet = XLSX.utils.json_to_sheet(parseCitizensData(female));
        const disabilitySheet = XLSX.utils.json_to_sheet(parseCitizensData(disability));

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, eldersSheet, "Elders");
        XLSX.utils.book_append_sheet(workbook, youthSheet, "Youth");
        XLSX.utils.book_append_sheet(workbook, childrenSheet, "Children");
        XLSX.utils.book_append_sheet(workbook, maleSheet, "Male");
        XLSX.utils.book_append_sheet(workbook, femaleSheet, "Female");
        XLSX.utils.book_append_sheet(workbook, disabilitySheet, "Disability");

        const excelBuffer = XLSX.write(workbook, {bookType: "xlsx", type: "array"});
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    };

    return (
        <button className={'px-2  space-x-2 flex items-center  py-2 text-xs uppercase border-[1.5px] border-accent4 group flex tracking-wider ' +
            ' text-accent4 transition-all hover:bg-accent4/90 hover:text-white duration-300 cursor-pointer rounded  justify-center items-center'}
            onClick={exportToCSV}
        >
            <FontAwesomeIcon icon={faDownload} className={'h-4 w-4'}/>
            <p>report</p>
        </button>
    );
};

export default ExportToXLSX;

// This component is a presentational component which takes the data to download and file name as props. The exportToCSV method is invoked when the export button is clicked on line 20.
