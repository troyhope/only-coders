import React from "react";
import TopNavbar from "../components/navigation/TopNavBar";
import LeftNavbar from "../components/navigation/LeftNavBar";

import styles from "./page.module.css";

function DashboardLayout({ children }) {
  return (
    <div
      style={{
        background: "#f8f8fb",
        height: "auto",
        marginTop: "58px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TopNavbar />
      <div className="d-flex flex-grow-1">
        <LeftNavbar style={{ height: "calc(100vh - 58px)" }} />{" "}
        <div className="flex-grow-1">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
