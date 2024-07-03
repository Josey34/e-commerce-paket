import { Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import Cards from "../components/CustomerPageComponents/Card";
import Nav from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const CustomerPage = () => {
  const [products, setProducts] = useState([]);

  const API_URL = "http://localhost:5000";

  const getData = async () => {
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Nav />
      <Sidebar />
      <Box sx={{ mt: 4, ml: 50}}>
        <Typography variant="h4" gutterBottom>
          Paket Data Internet
        </Typography>
        
        <Cards products={products} />
      </Box>
    </>
  );
};

export default CustomerPage;
