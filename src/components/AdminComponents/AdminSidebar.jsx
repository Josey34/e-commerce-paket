import { Button, Box, Typography, Divider } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

const AdminSidebar = () => {
  return (
    <>
      <Box
        sx={{
          width: "15%",
          position: "fixed",
          height: "100%",
          borderRight: "2px solid #e5e5e5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <Box>
          <DashboardIcon fontSize="large" />
        </Box>
        <Typography variant="h6" gutterBottom>
          Admin
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ marginBottom: "2rem", color: 'text.secondary' }}
        >
          Admin
        </Typography>
        <Divider sx={{ width: "100%", marginBottom: "2rem" }} />
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{
            color: "text.secondary",
            textAlign: "left",
            width: "100%",
            px: 2,
            ml: 3,
          }}
        >
          Main Menu
        </Typography>
        <Button
          variant="contained"
          startIcon={<DashboardIcon />}
          href="/admin"
          sx={{ width: "80%", borderRadius: 2.5 }}
        >
          Dashboard
        </Button>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{
            mt: 2,
            color: "text.secondary",
            textAlign: "left",
            width: "100%",
            px: 2,
            ml: 3,
          }}
        >
          Logout
        </Typography>
        <Button
          variant="contained"
          startIcon={<LogoutRoundedIcon />}
          sx={{ width: "80%", borderRadius: 2.5 }}
          href="/login"
        >
          Logout
        </Button>
      </Box>
    </>
  );
};

export default AdminSidebar;
