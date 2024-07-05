import {
  Container,
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productAvailable, setProductAvailable] = useState(true);

  const navigate = useNavigate()

  const handleData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          "product-name": productName,
          "product-price": parseInt(productPrice),
          "product-description": productDescription,
          "product-quantity": parseInt(productQuantity),
          "product-available": productAvailable,
        }),
      });
      const data = await response.json();
      alert("Produk sudah ditambahkan!")
      navigate("/admin")
      console.log("Success", data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
    <AdminSidebar />
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom sx={{ pt: 20 }}>
          Create a Product
        </Typography>
        <form onSubmit={handleData} >
          <Box mb={2} >
            <TextField
              label="Product Name"
              variant="outlined"
              fullWidth
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Product Price"
              variant="outlined"
              type="number"
              fullWidth
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Product Description"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Product Quantity"
              variant="outlined"
              type="number"
              fullWidth
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
            />
          </Box>
          <Box mb={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={productAvailable}
                  onChange={(e) => setProductAvailable(e.target.checked)}
                />
              }
              label="Product Available"
            />
          </Box>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};

export default CreateProduct;
