import React from "react";
import {
  Box,
  Grid,
  Card,
  Button,
  Container,
  Typography,
  Rating,
} from "@mui/material";
import customStyle from "../style";
import "../../pages/Page.css";


const CardList = (props) => {
  const classes = customStyle();
  const { id, image, title, description, price } = props;
  return (
    <>
      <Container maxWidth="xl" className="wd-myprofile-layout">
        <Card lg={12} sm={12} className={classes.ServiceCard} key={id}>
          <Grid item container>
            <Grid item xs={4} sm={4} md={4}>
              <Box
                component="img"
                mt={3}
                sx={{
                  height: 182,
                  width: 300,
                  maxHeight: { xs: 233, md: 182 },
                  maxWidth: { xs: 350, md: 300 },
                  marginLeft: "36px",
                }}
                alt={title}
                src={image}
              />
            </Grid>
            {/* Card content */}
            <Grid item xs={8} sm={8} md={8}>
              <Grid item container>
                {/* Service Title */}
                <Grid item xs={12} sm={12} md={12}>
                  <Typography
                    component="h4"
                    className={"wd-service-card-h1"}
                    mt={2}
                    ml={5}
                  >
                    {title}
                  </Typography>
                </Grid>
                {/* Service Card Title End */}
                <Grid item xs={12} sm={12} md={12} mt={1}>
                  <Typography
                    component="subtitle1"
                    className={"wd-service-card-subtitle"}
                    mt={2}
                    ml={5}
                  >
                    {description}
                  </Typography>
                </Grid>
                {/* service subtitle end */}
                {/* service pricing  start */}
                <Grid item xs={3} sm={3} md={3} mt={1} ml={5}>
                  <Rating
                    name="read-only"
                    value={5}
                    readOnly
                    className={"wd-service-card-rating"}
                  />
                </Grid>
                <Grid item xs={3} sm={3} md={3} mt={1} ml={5}>
                  2k Rating
                </Grid>
                <Grid item xs={3} sm={3} md={3} mt={1} ml={5}>
                  <Typography
                    component="string"
                    className={"wd-pages-card-price"}
                  >
                    &#x20B9; {price}
                  </Typography>
                </Grid>
                {/* View Button */}
                <Grid
                  item
                  xs={10}
                  sm={10}
                  md={10}
                  mt={1}
                  ml={5}
                  style={{
                    textAlign: "right",
                  }}
                >
                  <Button
                    variant="contained"
                    className={"wd-pages-card-view-btn"}
                  >
                    View Details
                  </Button>
                </Grid>
                {/* View Button */}
                {/* service Pricing end */}
              </Grid>
              {/* end container */}
            </Grid>
            {/* card content end */}
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default CardList;