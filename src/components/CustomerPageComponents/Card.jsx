import { CardActionArea, Grid, Typography } from "@mui/material";
import { Card, CardContent, CardMedia, Box } from "@mui/material";
import { useState } from "react";

const Cards = ({ products, handleTransaction }) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ maxWidth: 345, position: 'relative' }}
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleTransaction(product)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://via.placeholder.com/400"
                alt="Product Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product["product-name"]}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product["product-description"]}
                </Typography>
              </CardContent>
              {hoveredProductId === product.id && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  <Typography variant="h6" component="div">
                    Harga: Rp. {product["product-price"]}
                  </Typography>
                  <Typography variant="body2" component="div">
                    Jumlah: {product["product-quantity"]}
                  </Typography>
                </Box>
              )}
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
