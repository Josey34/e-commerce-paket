import "./login.css";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const Login = ({ onSwitch }) => {
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
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </div>
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
          <div className="btn-link">
            <Button variant="contained">Sign-in</Button>
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
