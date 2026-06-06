import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function DashboardLayout({ onLogout }) {
  return (
    <>
      <Navbar onLogout={onLogout} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default DashboardLayout;