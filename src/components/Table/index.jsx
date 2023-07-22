import React, { useState } from "react";
import TableRow from "../TableRow";

export default function Table({ data }) {
  const [showNested, setShowNested] = useState(false);
  const tableData = Object.keys(data).map((d) => data[d]);
  const toggleNested = () => {
    setShowNested(!showNested);
  };
  return (
    <>
      {tableData.map((parent) => {
        return (
          <div
            style={{ paddingLeft: "10px" }}
            className={parent.account_name}
            key={parent.account_name}
          >
            <TableRow
              hasChild={parent.children}
              onClickHandler={() => toggleNested()}
            >
              {parent}
            </TableRow>
            <div style={{ display: showNested ? "block" : "none" }}>
              {parent.children && <Table data={parent.children} />}
            </div>
          </div>
        );
      })}
    </>
  );
}
