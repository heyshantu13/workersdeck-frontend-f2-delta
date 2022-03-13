import React from 'react'
import {Grid,Card,Container,Stack,Typography} from "@mui/material/";
import {Style} from "../";

function HowItWorks() {
  const classes = Style();
  return (
    <>
   
      <Card  className={classes.how_it_works}>
        <Stack direction="row" spacing={2} m={1} justifyContent="center" p={1} >
        <Typography
                          varient="h4"
                          className={classes.worker_title}
                          mt={2}
                          ml={5}
                      >
                        How It Work
                      </Typography>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Container maxWidth="lg" >
          <Grid item xs={6} sm={6} md={4} lg={4}>
              1
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={4}>
              1
          </Grid>
          </Container>
        </Stack>
      </Card>
     
    </>
  )
}

export default HowItWorks;