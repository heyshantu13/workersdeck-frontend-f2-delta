import React, { useState,useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Skeleton
} from "@mui/material/";
import { useDispatch, useSelector, } from "react-redux";
import { login } from "./loginSlice";
import styles from "../../assets/main.module.css";
import customStyle from "./style";
import registerBackground from "../../assets/auth_banner.png";
import muiStyle from "../../assets/mui_style";
import {useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const Login = () => {
  
  const classes = customStyle();
  const dispatch = useDispatch();
  const muistyle = muiStyle();
  const navigate = useNavigate();
  const notify = () => toast.success("Successfully Loggedin ",{
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    });
 
  const [assets,setAssets] = useState({
    background : false,
  });


  const [inputs, setInputs] = useState({
    email: "pesto@email.com",
    password: "12345678",
  });

  const [valid, setValid] = useState({
    email: true,
    password: true,
    disableButton: false,
    auth : true,
    passwordError: "",
    emailError: "",
    authError: "",
    success:false,
  });

  const  [bntloading, setBtnloading ] = useState(false);

  useEffect(() => {
    setAssets((prevState) => ({
      ...prevState,
      background:true,
    }))
  }, []);

  const handleSubmit = (e) => {
    const {email, password} =  inputs;
    if(valid.email === true && valid.password === true){
      e.preventDefault();
      setBtnloading(true);
      setValid((prevState) => ({
        ...prevState,
        disableButton:true,
        auth:true,
        authError:"",
      }))
       dispatch(login({ email, password }))
       .then((response) => {
        notify();
         if(response.payload.user.status === true){
          setBtnloading(false);
         }
         
         setTimeout(() => {
           //history.push("/");
           navigate("/");
        }, 100);
       
       }).catch((error) => {
        setBtnloading(false);
        setValid((prevState) => ({
          ...prevState,
          disableButton:false,
          authError:"Email or Password is incorrect",
          auth:false,
        }));

       });
    }else{
      e.preventDefault();
    }
   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    if (e.target.name === "email") {
      console.log(e.target.value);
      validateEmail(e.target.value);
    }
    if (e.target.name === "password") {
      validatePass(e.target.value);
    }

  };

  const validateEmail = (email) => {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === false) {
      setValid((prevState) => ({
        ...prevState,
        email: false,
        emailError: "Enter Valid Email",
      }));
    } else {
      setValid((prevState) => ({ ...prevState, email: true, emailError: "" }));
    }
  };

  const validatePass = (password) => {
    if (password.length < 8 || password.length > 14) {
      setValid((prevState) => ({
        ...prevState,
        password: false,
        passwordError: "Password Must be 8-14 Charecter",
      }));
    } else {
      setValid((prevState) => ({
        ...prevState,
        password: true,
        passwordError: "",
      }));
    }
  };

  return (
    <>
      <Grid container>
        <Grid
          sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
          md={6}
          lg={6}
          item
        >
          { assets.background ?
           <Box
            style={{
              height: "42rem",
              maxWidth: "44rem",
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(45, 45, 45, 0.55)",
              backgroundImage: `url(${registerBackground})`,
            
            }}
          />
          :
          <Skeleton variant="rectangular" style={{
            height: "42rem",
            maxWidth: "44rem",
           }} />
        }
        </Grid>
        <Grid sm={12} xs={12} md={6} lg={6} item >
        <Box component="span" className={classes.authform} sx={{
              "& > :not(style)": { m: 1, maxWidth: "65ch"},
            }}>
        <Grid sm={12} xs={12} md={12} lg={12} item m={4}>
        <Typography  variant="h4" className={classes.auth_head} m={6} mt={8}>
           Login to your account
        </Typography>
        </Grid>
          <form onSubmit={handleSubmit} className={styles.form_align}>
          <Grid sm={12} xs={12} md={12} lg={12} item m={3}>
            <TextField
              required
              onChange={handleChange}
              id="email"
              label="Email"
              variant="outlined"
              className={`field-spacing`}
              fullWidth
              value={inputs.email}
              name="email"
              error={!valid.email}
              helperText={valid.emailError }
            />
            </Grid>
            <Grid sm={12} xs={12} md={12} lg={12} item m={3}>
            <TextField
              required
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              className={`field-spacing `}
              fullWidth
              onChange={handleChange}
              value={inputs.password}
              name="password"
              error={!valid.password}
              helperText={valid.passwordError}
            />
            </Grid>
            <Grid sm={12} xs={12} md={12} lg={12} item m={3}>
                 {!valid.auth
                  ?  <Typography
                  variant="string"
                  align="center"
                  className={` ${muistyle.wd_text} ${muistyle.wd_danger_text}`}
                >
                  {valid.authError}
                </Typography>
                : ""
                 }
            </Grid>
            <Grid sm={12} xs={12} md={12} lg={12} item m={3}>
           <Typography
              variant="string"
              align="center"
              className={`field-spacing ${classes.forget_pass_text}`}
            >
              Forget Password?
            </Typography>

            </Grid>
            <Grid sm={12} xs={12} md={12} lg={12} item m={3} >
            <Button
              variant="contained"
              className="auth-btn"
              type="submit"
              disabled={valid.disableButton}
              className={`${classes.login_btn} ${muistyle.wd_primary_btn} ${classes.centerBox}`}
            >
                {bntloading 
                    ? <CircularProgress  size={30} thickness={6}  sx={{
                      color: '#ffffff',
                    }}/> 
                    : "Login"
                    }
            </Button>
            </Grid>
          </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
