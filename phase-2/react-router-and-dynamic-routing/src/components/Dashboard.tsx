import React from "react";
import {  NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashborad</h1>
      <nav>
        <NavLink to="/dashboard/profile" >Profile</NavLink>
        <NavLink to="/dashboard/setting" >Setting</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
