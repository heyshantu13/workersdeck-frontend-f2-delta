import React from "react";
import {CardContent,CardMedia,Typography,Button} from "@mui/material/";
import {Style} from "../index";

const ServiceCard = (props) => {
  const classes = Style();
    const { id, title, image } = props;
    return(
        <>
        <Button key={id} sx={{ m: 2, display: "block", mt: 6 }} style={{ cursor: 'default' }}>
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