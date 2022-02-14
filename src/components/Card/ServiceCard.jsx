import React from "react";
import {CardContent,CardMedia,Typography,Button} from "@mui/material/";
import { makeStyles } from '@mui/styles';

const customStyle = makeStyles({

  wd_service_title:{
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "42px",
    textAlign: "center",
    color: "#000000",
  },
  wd_service_image:{
    height: "84px",
    width: "84px",
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
 
});

const ServiceCard = (props) => {
  const classes = customStyle();
    const { id, title, image } = props;
    return(
        <>
        <Button key={id} sx={{ m: 1, display: "block", mt: 8 }}>
          <CardMedia className={classes.wd_service_image} image={image} />
          <CardContent>
            <Typography
              variant="body2"
              component="p"
              key={id}
              className={classes.wd_service_title}
            >
              {title}
            </Typography>
          </CardContent>
        </Button>
      </>
    )

}

export default ServiceCard;