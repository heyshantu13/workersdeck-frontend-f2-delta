import React from 'react'
import {
    Grid,
    Card,
    Button,
    Box,
} from "@mui/material";
import {Style} from "../";
import scrollToTop from "../../util/scrollToTop";
import OfferBanner from "../../assets/offerbanner.png";



export default function OfferArea() {
    const classes = Style();
  return (
    <Grid sm={12} xs={12} md={12} lg={12} item >
          <Card className={classes.wd_offer_card}>
            <Grid item container>
              <Grid sm={12} xs={12} md={8} lg={8} item>
                <h3 className={classes.offetTextOne}>
                  BOOK HOME CLEANING SERVICES
                </h3>
                <h4 className={classes.offetTextTwo}>AND GET FLAT 10% OFF</h4>
                <Box textAlign="center">
                  <Button className={classes.bookNowBtn} onClick={scrollToTop}>
                    Book Now
                  </Button>
                </Box>
              </Grid>
              <Grid sm={12} xs={12} md={4} lg={4} item>
                <Box
                  component="img"
                  sx={{
                    height: 370,
                    width: 370,
                    maxHeight: { xs: 455, md: 370 },
                    maxWidth: { xs: 370, md: 370 },
                  }}
                  mt={2}
                  alt="The house from the offer."
                  src={OfferBanner}
                  className="img-box-effect"
                />
              </Grid>
            </Grid>
          </Card>
          {/* Left area of banner  */}
          {/* Left Area End Of Banner */}
        </Grid>
  )
}
