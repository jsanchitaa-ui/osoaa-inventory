import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Box, Toolbar } from "@mui/material";

export default function MainLayout() {
  return (
    <Box sx={{ display: "flex" }}>

      <Sidebar />

      <Box sx={{ flexGrow: 1 }}>

        <Header />

        <Toolbar />

        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>

      </Box>

    </Box>
  );
}