import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import CustomerPage from "./pages/CustomerPage"
import TransactionPage from "./pages/TransactionPage"
import AdminPage from "./pages/AdminPage"
import CreateProduct from "./components/AdminComponents/CreateProduct"
import EditProduct from "./components/AdminComponents/EditProduct"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<CustomerPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/transaction/:id" element={<TransactionPage />}/>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/admin/create" element={<CreateProduct />}></Route>
        <Route path="/admin/edit/:id" element={<EditProduct />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
