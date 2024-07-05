import { Typography, Box, Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import Cards from "../components/CustomerPageComponents/Card";
import Nav from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const CustomerPage = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(6)

  const API_URL = "http://localhost:5000";
  const navigate = useNavigate()

  const getData = async () => {
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const handleTransaction = (product) => {
    navigate(`/transaction/${product.id}`)
  }

  const filteredProducts = products.filter((product) => {
    const matchSearch = product["product-name"].toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter ? product["product-price"] <= filter : true
    return matchSearch && matchFilter
  }
  );

  console.log(filteredProducts);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Nav search={search} handleInputChange={handleInputChange}/>
      <Sidebar handleFilter={handleFilter}/>
      <Box sx={{ mt: 4, ml: 50}}>
        <Typography variant="h4" gutterBottom>
          Paket Data Internet
        </Typography>
        
        <Cards products={currentProducts} handleTransaction={handleTransaction}/>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Box>
    </>
  );
};

export default CustomerPage;
