import React from 'react'
import style from "../Style";
import {
    Box,
    Grid,
    Button,
    Typography,
    Card,
    Container,
    Paper,
    Rating,
    Stack,
} from "@mui/material/";

export default function ServiceDetail(props) {
    const custom = style();
    const {reviews,service,worker} = props.data.data;
    const handleBooking = props.handleBooking;
    
  return (
    <>
        <Grid item  xs={12} sm={12} lg={12} mt={2}  >
        <Card  className={custom.serviceDetailCard} style={{overflowY: 'auto'}}  >
        <Stack direction="row" justifyContent="center" >
            <Box
                        component="img"
                        mt={3}
                        sx={{
                            height: 180,
                            width: 300,
                            maxHeight: { xs: 233, md: 182 },
                            maxWidth: { xs: 350, md: 300 },
                        }}
                        src={service.service_image}
                    />
           
        </Stack>
        <Stack direction="row" justifyContent="center" mt={3}>
        <Typography varient="h4" className={custom.servicetitle} >
            {service.service_name}
        </Typography>
        
        </Stack>
        <Stack direction="row" justifyContent="center" mb={2}>
        <Rating
                              name="read-only"
                              value={5}
                              readOnly
                          />
        </Stack>
        <Stack direction="row" mt={2}>
        <Grid item xs={12} sm={12}  md={6} lg={6} mb={2}>
            <Typography varient="h4" className={custom.estimatetime}>
                    Estimate Time - {service.estimate_time} Mins.
            </Typography>
        </Grid>
        <Grid item xs={12} sm={12}  md={3} lg={3} mb={2}>
            <span className={custom.servicePricing} > &#x20B9; {service.service_charge} </span>
        </Grid>
        <Grid item xs={12} sm={12}  md={3} lg={3} mb={2}>
            
        <Button
                          variant="contained"
                          className={custom.bookService2}
                          id={service.id}
                          mb={1}
                          onClick={(e) =>
                            handleBooking(service, e)
                        }
                      >
                         Book Service
                      </Button>
        </Grid>
        </Stack>
        </Card>
        </Grid>

    </>
  )
}
