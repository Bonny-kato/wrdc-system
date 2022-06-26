import React from "react";

import ReactToPdf from "react-to-pdf";

const CitizenReport  = () => {
    const ref = React.createRef();
    const options = {};
    return (
        <div>
            <ReactToPdf
                targetRef={ref}
                filename="div-blue.pdf"
                options={options}
                /* x={0.5}
                y={0.5} */
                scale={1}
            >
                {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
            </ReactToPdf>
            <div style={{ width: 500, height: "100%", background: "blue" }} ref={ref}>
                <p>hello worle</p>
            </div>
        </div>
    );
}
export default CitizenReport;

