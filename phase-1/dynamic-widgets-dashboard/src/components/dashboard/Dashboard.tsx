import React from "react";
import "./dasboard.css";
import Widgets from "../widgets/Widgets";

const Dashboard = () => {
  return <>
  <h1 className="dashboard">Dashboard</h1>
  <div className="widgets_container">
    <Widgets />
  </div>
  </>;
};

export default Dashboard;
