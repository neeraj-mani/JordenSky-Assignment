import React from "react";
import "./table-row.css";
export default function TableRow({ children, hasChild, onClickHandler }) {
  return (
    <div className="table-row" onClick={hasChild && onClickHandler}>
      <span
        style={{ paddingLeft: children ? "1rem" : "0" }}
        className="acc_name"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          />
        </svg>
        {children.account_name}
      </span>
      <span className="acc_id">{children.id}</span>
      <span className="acc_cur">{children.current}</span>
      <span className="acc_prev">{children.previous}</span>
    </div>
  );
}
