import React from 'react';
import {
    Box,
    Grid,
    Card,
    Button,
    Stack,
    Container 
  } from "@mui/material/";

  import {Style} from "../";
  import "../../App.css";

export default function HowItWorks() {
    const style = new Style();
  return (
    <>
    <Grid item xs={12} sm={12} md={12} lg={12}>
    <Container maxWidth="lg" className={style.wd_how_it_works_card} >
        <Grid container spacing={2}>

            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Stack direction="row"  justifyContent="left" p={1} >
                    <p className={"subtitle_one"}>How It Works?</p>
                </Stack>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Stack direction="row"  justifyContent="right" p={1} >
                <p className={"how_it_works_p"}>
                    Workers Deck Provide High Quality Service Provider For your home service with 100% Quality Assurance.<br/>
                    <ol>
                   <li>  100% Secure</li> 
                   <li>  100% Safe</li>
                   <li>  100% Genuine</li>
                   </ol>
                    </p>
                </Stack>
            </Grid>


        </Grid>
        
    </Container>
    </Grid>
    </>
  )
}
