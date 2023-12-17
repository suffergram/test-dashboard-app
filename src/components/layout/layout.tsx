import { Outlet } from "react-router-dom";
import "./style.css";

export function Layout() {
  return (
    <main className="layout-main">
      <Outlet />
    </main>
  );
}
