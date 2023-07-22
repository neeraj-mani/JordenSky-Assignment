import { useState } from "react";
import "./graph-page.css";
import LineGraph from "../../components/LineGraph";
import Button from "../../components/Button";
import ColumnChart from "../../components/ColumnChart";
import { NavLink, useParams } from "react-router-dom";

export default function GraphPage() {
  const { id } = useParams();
  console.log(id);
  const index = id === "m" ? 0 : 1;
  const data = [
    {
      title: "Monthly Sales Performance",
      labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      data: [15000, 8000, 4500, 11000, 2000, 9500],
    },
    {
      title: "Sales Performance",
      labels: ["Q1", "Q2", "Q3", "Q4"],
      data: [15000, 8000, 4500, 11000],
    },
  ];
  return (
    <div className="graph-container">
      <div className="header">
        <NavLink className={"back-btn"} to={".."}>
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </NavLink>
      </div>
      <div className="line-graph">
        <LineGraph
          chartData={data[index].data}
          title={data[index].title}
          labels={data[index].labels}
        />
      </div>
      <div className="column-chart">
        <ColumnChart
          chartData={data[index].data}
          title={data[index].title}
          labels={data[index].labels}
        />
      </div>
      <div className="navlink-container">
        <NavLink to={"/graph/m"}>
          <Button bg={""} fontColor={""}>
            Monthly
          </Button>
        </NavLink>

        <NavLink to={"/graph/q"}>
          <Button bg={""} fontColor={""}>
            Quarterly
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
