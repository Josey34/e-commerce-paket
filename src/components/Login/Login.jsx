import "./login.css";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onSwitch }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const users = await response.json();

      const user = users.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );
      if (user) {
        if (user.email === "admin@admin.com" && user.password === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Failed to login. Please try again later.");
    }
  };
  return (
    <>
      <div className="login">
        <div className="login-box">
          <div className="login-head">
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign-In
            </Typography>
          </div>
          <div className="login-body">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={!!error}
              helperText={error}
            />
          </div>
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
          <div className="btn-link">
            <Button variant="contained" onClick={handleSubmit}>
              Sign-in
            </Button>
          </div>
          <Link onClick={onSwitch} variant="body2" className="link">
            {"Don't have an account? Sign Up"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
