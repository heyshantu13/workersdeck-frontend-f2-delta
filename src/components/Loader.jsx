import React from 'react';
import {
    Grid,
    CircularProgress,
} from "@mui/material/";


 const  Loader = (props) => {
     console.log(props);
    const {size,thickness,color}  = props;
    return(
        <>

<Grid container spacing={0} align="center" justify="center" direction="column">
      <Grid item > <CircularProgress
                                      size={size}
                                      thickness={thickness}
                                      sx={{
                                          color,
                                      }}/>
      </Grid>
    </Grid>
        
        </>
    )
   
}

export default Loader;