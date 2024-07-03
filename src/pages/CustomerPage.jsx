import { Typography, Box } from "@mui/material";

const CustomerPage = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Customer Menu
      </Typography>
      <Typography variant="body1">
        Welcome to the customer menu. Here you can view your profile and manage
        your account.
      </Typography>
    </Box>
  );
};

export default CustomerPage;
