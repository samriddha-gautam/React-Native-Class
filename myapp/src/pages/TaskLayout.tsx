import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function TaskLayout() {
  return (
    <div>
      <h1>
        <b>My Tasks</b>
      </h1>
      <Navbar/>
      <Outlet/>
    </div>
  );
}
