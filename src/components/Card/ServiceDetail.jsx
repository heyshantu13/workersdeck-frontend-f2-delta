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
        <Typography varient="h4" >
            {service.service_name}
        </Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" mt={3}>
        <Rating
                              name="read-only"
                              value={5}
                              readOnly
                          />
        </Stack>
        </Card>
        </Grid>

    </>
  )
}
