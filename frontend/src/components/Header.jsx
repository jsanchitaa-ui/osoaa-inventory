import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{
        backgroundColor: "#fff",
        color: "#111827",
      }}
    >
      <Toolbar>
        <Typography variant="h6" fontWeight="bold">
          OSOAA Inventory Management System
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Typography fontWeight={600}>
          Admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
}