import React, { useState } from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import LogoutButton from "./logout";
import "./excelReader.css";


const ExcelImportTool = ({ onLogout }) => {
  const [header, setHeader] = useState([]);
  const [cols, setCols] = useState([]);

  const handleFile = (event) => {
    const file = event.target.files[0];
    const blob = new Blob([file], { type: "application/vnd.ms-excel" });
    ExcelRenderer(blob, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
        setHeader(res.rows[0]);
        setCols(res.rows);
      }
    });
  };

  return (
    <>
      <label htmlFor="xlsxfile">Choose a file:</label>
      <input
        style={{ margin: "10px auto" }}
        type="file"
        accept=".xls, .xlsx"
        onChange={handleFile}
        id="xlsxfile"
      />
      <br />
      <table className="table"
        style={{
          borderCollapse: "collapse",
          margin: "10px auto",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            {header.map((e, i) => {
              console.log("header", e);
              return <th key={i}>{e}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {cols.slice(1).map((col, i) => {
            console.log("cols", col);
            return (
              <tr key={i}>
                {col.map((e, j) => {
                  return (
                    <td style={{ border: "1px solid black" }} key={j}>
                      {e}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {header.length > 0 && <LogoutButton onLogout={onLogout} />}
    </>
  );
};

export default ExcelImportTool;
