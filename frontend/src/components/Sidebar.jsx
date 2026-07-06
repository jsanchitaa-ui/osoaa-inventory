import { Drawer, Toolbar, List, ListItemButton, ListItemText } from "@mui/material";
import { Dashboard, Inventory2 } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          background: "#111827",
          color: "#fff",
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar>
        <h2>OSOAA</h2>
      </Toolbar>

      <List>

        <ListItemButton component={NavLink} to="/">
          <Dashboard sx={{ mr: 2 }} />
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/products">
          <Inventory2 sx={{ mr: 2 }} />
          <ListItemText primary="Products" />
        </ListItemButton>

      </List>
    </Drawer>
  );
}