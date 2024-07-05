import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Tables = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:5000";
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!products.length) return <div>Loading...</div>;

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const handleDelete = (id) => {
    if (window.confirm("Apakah ingin menghapus?")) {
      fetch("http://localhost:5000/products/" + id, {
        method: "DELETE",
      });
      alert("Berhasil Dihapus!");
      window.location.reload();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        ml: "16px",
        width: "80%",
        mt: "24px",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/admin/create")}
        sx={{ marginBottom: 2, alignSelf: "flex-end" }}
      >
        Create New Product
      </Button>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <StyledTableRow key={product.id}>
                <StyledTableCell component="th" scope="row">
                  {product["product-name"]}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {product["product-price"]}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {product["product-description"]}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {product["product-quantity"]}
                </StyledTableCell>
                <StyledTableCell align="center">
                  
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mr: 2 }}
                    onClick={() => navigate(`/admin/edit/${product.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Tables;
