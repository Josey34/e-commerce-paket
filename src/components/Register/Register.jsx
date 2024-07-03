import { Avatar, Button, TextField, Typography, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import '../Login/login.css'

const Register = ({ onSwitch }) => {
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
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
          </div>
          <div className="btn-link">
            <Button variant="contained">Sign Up</Button>
          </div>
          <Link onClick={onSwitch} variant="body2" className="link">
            {"Already have an account? Sign In"}
          </Link>
        </div>
      </div>
    </>
  )
}

export default Register