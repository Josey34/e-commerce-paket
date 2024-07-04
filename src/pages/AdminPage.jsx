import Tables from "../components/AdminComponents/Table";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
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
  return (
    <Box sx={{ display: 'flex' }}>
      <AdminSidebar />
      <Box sx={{ marginLeft: '15%', padding: 3, width: '85%' }}>
        <Tables product={product} />
      </Box>
    </Box>
  );
};

export default AdminPage;
