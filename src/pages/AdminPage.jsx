import Tables from "../components/AdminComponents/Table";
import { useState, useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import AdminSidebar from "../components/AdminComponents/AdminSidebar";

const AdminPage = () => {
  const [product, setProduct] = useState(null);

  const API_URL = "http://localhost:5000";

  // Fetch product data
  const getProductData = async () => {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row' }}>
      <AdminSidebar />
      <Box
        sx={{
          flexGrow: 1,
          padding: 3,
          marginLeft: { xs: 0, md: '15%' },
          width: { xs: '100%', md: '85%' },
        }}
      >
        <Tables product={product} />
      </Box>
    </Box>
  );
};

export default AdminPage;
