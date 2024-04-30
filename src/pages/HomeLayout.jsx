import { Outlet } from "react-router-dom";

import { Navbar } from "../components";

function HomeLayout() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen grid place-content-center text-center">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;
