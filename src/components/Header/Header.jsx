import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material/";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink,Link, } from "react-router-dom";
import styles from "./header.module.css";
import LoadingBar from 'react-top-loading-bar';
import {useSelector,useDispatch} from "react-redux";
import {logout} from "../../features/login/loginSlice";
import { toast } from 'react-toastify';
import {useNavigate } from "react-router-dom";


const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFA",
    },
    secondary: {
      main: "#3F51B5",
    },
    third: {
      main: "#2D3748",
    },
  },
});

const Header = () => {
  const navigate = useNavigate();

  const notify = () => toast.success("Logged Out Succesfully",{
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    });


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [progress, setProgress] = useState(0);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userInfo = useSelector((state) => state.login.user);
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    setProgress(100);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    notify();
    navigate("/");
  }

  return (
    <>
    <LoadingBar
    color='#3f51b5'
    progress={progress}
    onLoaderFinished={() => setProgress(0)}
    height={"4px"}
  />
      <ThemeProvider theme={lightTheme}>
        <AppBar position="sticky" color="primary" style={{boxShadow: "0 12px 34px -11px rgb(65 62 101 / 10%)"}}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ ml: 3, display: { xs: "none", md: "flex" } }}
              >
                <b className={styles.wd_logo}>W.D.</b>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem key={"home"} onClick={handleCloseNavMenu}>
                  <NavLink to="/"><Typography textAlign="center">Home</Typography></NavLink>
                  </MenuItem>
                  <MenuItem
                    key={"Registeraworker"}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      Register as Worker
                    </Typography>
                  </MenuItem>
                  <NavLink to="/register">
                  <MenuItem key={"Register"} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Register</Typography>
                  </MenuItem>
                  </NavLink>
                  <NavLink to="/login">
                  <MenuItem key={"Login"} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                  </NavLink>
                </Menu>
              </Box>

              {/* For desktop */}

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                <b className={styles.wd_logo}>W.D.</b>
              </Typography>
              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                className={styles.menu_content}
              >
                  
                     <Button
                  key={"home"}
                  onClick={handleCloseNavMenu}
                  sx={{ mr: 2, color: "black", display: "block", mt: 1 }}
                >
                  <Link to="/" style={{ textDecoration: "none" , color:'#000000' }}>Home</Link>
               
                </Button>
           
                
              

                
                <NavLink to={isLoggedIn ? "/dashboard" : "/login" }  style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  className={`${styles.btn_primary} ${styles.btn_md}`}
                >
                  <Typography textAlign="center" style={{
                       textDecoration:"none",
                    } }>{isLoggedIn ? userInfo.data.fullname : "Login" }</Typography>
                </Button>
               </NavLink>
               {!isLoggedIn &&  
               <NavLink to="/register"  style={{ textDecoration: 'none' }}> 
                <Button
                  variant="contained"
                  className={`${styles.btn_secondary} ${styles.btn_md}`}
                >
                    <Typography textAlign="center" >{isLoggedIn ? "Logout" : "Register" }</Typography>
                </Button>
              </NavLink>
              }
                {isLoggedIn &&  
             
                <Button
                  variant="contained"
                  className={`${styles.btn_secondary} ${styles.btn_md}`}
                  onClick ={handleLogout}
                >
                    <Typography textAlign="center" >{isLoggedIn ? "Logout" : "Register" }</Typography>
                </Button>
            
              }
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;