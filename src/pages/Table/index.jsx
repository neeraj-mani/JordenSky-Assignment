import data from "../../../data/tableData.json";
import Table from "../../components/Table";
import "./tablepage.css";

export default function TablePage() {
  //   console.log(data);
  const tableData = Object.keys(data).map((d) => data[d]);
  //   console.log(tableData);
  return (
    <div className="table-container">
      <div className="column-name">
        <span>account</span>
        <span>account code</span>
        <span>current</span>
        <span>previous</span>
      </div>
      <Table data={data} />
    </div>
  );
}
