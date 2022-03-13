import React from 'react'
import {Style} from "../";
import {
    Box,
    Grid,
    Button,
    Typography,
    Card,
    Rating,
    Stack,
} from "@mui/material/";

export default function ServiceDetail(props) {
    const custom = Style();
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
        <Card  className={custom.serviceDetailCard} style={{overflowY: 'auto'}}>
            <Stack direction="row" mt={1} justifyContent="center">
            <Typography varient="h4" className={custom.servicetitle}>Know More About Worker</Typography>  
            </Stack>
            <Stack direction="row" mt={2}>
             
            <Grid item xs={12} sm={12} lg={8} p={1}>
            <Typography varient="h6" component="div" className={custom.servicedescription} ml={2}>
            Provider Name : <span className={custom.worker_info}>{worker.user.fullname}</span>
            </Typography>
            <Typography varient="h6" component="div" className={custom.servicedescription} ml={2}>
            Contact Info : <span className={custom.worker_info}>+91- {worker.user.mobile_no}</span>
            </Typography>
            <Typography varient="h6" component="div" className={custom.servicedescription} ml={2}>
            Contact Email : <span className={custom.worker_info}> {worker.user.email}</span>
            </Typography>    
            </Grid> 
            <Grid item xs={12} sm={12} lg={4} p={1}>
            <Box
                          component="img"
                          sx={{
                              height: 150,
                              width: 150,
                          }}
                          src={worker.profile_pic}
                      />
            </Grid> 
                       
            </Stack>
        </Card>
        </Grid>

    </>
  )
}
