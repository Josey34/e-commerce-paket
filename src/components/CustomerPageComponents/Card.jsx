import { CardActionArea, Grid, Typography } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";

const Cards = ({ products }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
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
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
