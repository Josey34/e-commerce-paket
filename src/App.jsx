import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import CustomerPage from "./pages/CustomerPage"
import TransactionPage from "./pages/TransactionPage"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/transaction" element={<TransactionPage />}/>
      </Routes>
    </Router>
  )
}

export default App
