import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material/";
import { useDispatch } from "react-redux";
import { login } from "./loginSlice";
import styles from "../../assets/main.module.css";
import customStyle from "./style";
import registerBackground from "../../assets/auth_banner.png";
import { useNavigate,useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";


const Login = () => {
  const location = useLocation();
  console.log(location,"location");
  const classes = customStyle();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notify = (msg) =>
    toast.success(msg, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  const alert = (msg) =>
    toast.error(msg, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });

  const [inputs, setInputs] = useState({
    email: "pesto@email.com",
    password: "12345678",
  });

  const [valid, setValid] = useState({
    email: true,
    password: true,
    disableButton: false,
    auth: true,
    passwordError: "",
    emailError: "",
    authError: "",
    success: false,
  });

  const [bntloading, setBtnloading] = useState(false);

  const handleSubmit = (e) => {
    const { email, password } = inputs;
    if (valid.email === true && valid.password === true) {
      e.preventDefault();
      setBtnloading(true);
      setValid((prevState) => ({
        ...prevState,
        disableButton: true,
        auth: true,
        authError: "",
      }));
      dispatch(login({ email, password }))
        .then((response) => {
          if (response.payload.user.status === true) {
            navigate(-1);
            notify(`Welcome Back, ${response.payload.user.data.fullname}`);
          } else {
            alert("Opps! You Entered Incorrect Credentials");
            setBtnloading(false);
            setValid({
              disableButton: false,
            });
          }
        })
        .catch((error) => {
          setBtnloading(false);
          setValid({
            disableButton: false,
          });
        });
    } else {
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
          <Box
            style={{
              height: "41.5rem",
              maxWidth: "44rem",
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(45, 45, 45, 0.55)",
              backgroundImage: `url(${registerBackground})`,
            }}
          />
        </Grid>
        <Grid sm={12} xs={12} md={6} lg={6} item>
          <Grid sm={12} xs={12} md={12} lg={12} item m={4}>
            <Typography variant="h4" className={classes.auth_head} m={6} mt={8}>
              Welcome To Workers Deck
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit} className={styles.form_align}>
            <Grid sm={12} xs={12} md={8} lg={8} item>
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
                helperText={valid.emailError}
              />
            </Grid>
            <Grid sm={12} xs={12} md={8} lg={8} item>
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
            <Grid sm={12} xs={12} md={8} lg={8} item>
              <Typography
                variant="string"
                align="center"
                className={`field-spacing ${classes.forget_pass_text}`}
              >
                Forget Password?
              </Typography>
            </Grid>
            <Grid sm={6} xs={6} md={6} lg={6} item>
              <Button
                variant="contained"
                className="auth-btn"
                type="submit"
                disabled={valid.disableButton}
              >
                {bntloading ? (
                   <Loader size={30} thickness={8} color={"#ffffff"}/>
                ) : (
                  "Login To Account"
                )}
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
