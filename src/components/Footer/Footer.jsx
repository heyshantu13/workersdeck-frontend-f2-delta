import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import customStyle from "../style";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Footer() {
  const classes = customStyle();
  return (
    <Grid item container>
      <Grid sm={12} xs={12} md={12} lg={12} item>
        <Box sx={{ bgcolor: "#2D3748", height: "24vh" }}>
          <Container maxWidth="lg" className="footer-container">
            <Typography variant="h3" className={classes.footer_text_logo}>
              W.D
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              className={classes.wd_text}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  key={"home"}
                  sx={{ mr: 2, display: "block", color: "#FFFFFF" }}
                >
                  Home
                </Button>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  key={"home"}
                  sx={{ mr: 2, display: "block", color: "#FFFFFF" }}
                >
                  Register As Worker
                </Button>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  key={"home"}
                  sx={{ mr: 2, display: "block", color: "#FFFFFF" }}
                >
                  About us
                </Button>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  key={"home"}
                  sx={{ mr: 2, display: "block", color: "#FFFFFF" }}
                >
                  support@workersdeck.in
                </Button>
              </Link>
            </Box>
          </Container>
          <p className="copyright">Copyright &copy; 2022</p>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;