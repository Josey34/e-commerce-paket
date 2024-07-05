import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typography, Container, Button, Paper, Grid, Box, Card, CardMedia, CardContent } from "@mui/material";
import Nav from "../components/Navigation/Navbar";

const TransactionPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const API_URL = "http://localhost:5000";

  // Fetch product data
  const getProductData = async () => {
    try {
      const response = await fetch(`${API_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getProductData();
  }, [id]);

  // Handle loading state
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Loading...</div>;

  // Order details calculations
  const price = product["product-price"];
  const quantity = product["product-quantity"];
  const tax = price * 0.1; // Assuming 10% tax
  const totalAmount = (price + tax) * quantity;

  return (
    <div className="transaction-page">
      <Nav />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          {/* Left Column: Product Details */}
          <Grid item xs={12} md={8}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
              <CardMedia
                component="img"
                sx={{ width: { xs: '100%', md: 300 }, height: 'auto' }}
                image="/assets/photo1.jpg"
                alt="Product Image"
              />
              <CardContent>
                <Typography
                  className="transaction-title"
                  variant="h4"
                  gutterBottom
                >
                  Detail Pesanan
                </Typography>
                <Typography variant="h5" component="div">
                  {product["product-name"]}
                </Typography>
                <Typography
                  className="transaction-description"
                  variant="body1"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  {product["product-description"]}
                </Typography>
                <Typography
                  className="transaction-price"
                  variant="h6"
                  component="div"
                  sx={{ mt: 2 }}
                >
                  Harga: Rp. {product["product-price"]}
                </Typography>
                <Typography
                  className="transaction-quantity"
                  variant="body1"
                  component="div"
                  sx={{ mt: 2 }}
                >
                  Tersedia: {product["product-quantity"]}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column: Order Details */}
          <Grid item xs={12} md={4}>
            <Paper
              className="order-details-paper"
              elevation={3}
              sx={{ padding: 3 }}
            >
              <Typography variant="h6" component="div" gutterBottom>
                Detail Pembayaran
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" component="div">
                  <strong>Harga:</strong> Rp. {price}
                </Typography>
                <Typography variant="body1" component="div">
                  <strong>Jumlah:</strong> {quantity}
                </Typography>
                <Typography variant="body1" component="div">
                  <strong>Subtotal:</strong> Rp. {price * quantity}
                </Typography>
                <Typography variant="body1" component="div">
                  <strong>Pajak (10%):</strong> Rp. {tax.toFixed(2)}
                </Typography>
                <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                  <strong>Total Harga:</strong> Rp. {totalAmount.toFixed(2)}
                </Typography>
              </Box>
              <Button
                className="pay-button"
                variant="contained"
                color="primary"
                fullWidth
                onClick={() =>
                  alert(`Selamat anda telah berhasil membeli ${product["product-name"]}`)
                }
              >
                Bayar
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TransactionPage;
