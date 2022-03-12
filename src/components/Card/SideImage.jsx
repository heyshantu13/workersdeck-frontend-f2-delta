import React from 'react';
import {
    Box,
    Grid,
} from "@mui/material";
import registerBackground from "../../assets/auth_banner.png";


 const SideImage = () => {

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

}

export default SideImage;