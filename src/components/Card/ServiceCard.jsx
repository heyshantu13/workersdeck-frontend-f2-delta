import React from "react";
import {CardContent,CardMedia,Typography,Button} from "@mui/material/";

const ServiceCard = (props) => {
    const { id, title, image } = props;
    return(
        <>
        <Button key={id} sx={{ mr: 2, display: "block", mt: 8 }}>
          <CardMedia style={{ height: "94px", width: "94px" }} image={image} />
          <CardContent>
            <Typography
              variant="body2"
              component="p"
              key={id}
              style={{
                fontWeight: "600",
                fontSize: "18px",
                color: "#000000",
                textAlign: "center",
                marginLeft: "-10px",
              }}
            >
              {title}
            </Typography>
          </CardContent>
        </Button>
      </>
    )

}

export default ServiceCard;