

import { Outlet } from "react-router-dom"

import Navbar from "../components/Navbar"

function DashboardLayout() {
    return (
        <div>
             {/* Shared navigation stays visible across child routes. */}
             <Navbar />

             <main>
                {/* The matching child route renders here. */}
                <Outlet />
             </main>
        </div>
    )
}

export default DashboardLayout

