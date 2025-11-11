import { Outlet } from "react-router-dom";
import HeaderNav from "./components/layout/HeaderNav";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div className="bg-[#f1f6f969] rounded-[20px] min-h-screen">
      <div className="flex">
        <div className="pl-10">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col p-10">
          <HeaderNav />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
