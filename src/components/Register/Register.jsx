import { useState } from "react";
import { Avatar, Button, TextField, Typography, Link } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

const Register = ({ onSwitch }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    let isValid = true;

    if (!formData.email) {
      validationErrors.email = "Email is required!";
      isValid = false;
    }

    if (!formData.password) {
      validationErrors.password = "Password is required!";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match!";
      isValid = false;
    }

    setErrors(validationErrors);

    if (isValid) {
      try {
        const response = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();
        alert("User successfully registered!");
        navigate("/login");
        console.log("Success", data);
      } catch (error) {
        console.error("Error:", error);
      }
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
              Sign Up
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
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              fullWidth
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
          </div>
          <div className="btn-link">
            <Button variant="contained" onClick={handleSubmit}>
              Sign Up
            </Button>
          </div>
          <Link onClick={onSwitch} variant="body2" className="link">
            {"Already have an account? Sign In"}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
