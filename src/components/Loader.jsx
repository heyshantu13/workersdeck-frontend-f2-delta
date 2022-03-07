import React from 'react';
import {
    CircularProgress,
} from "@mui/material/";


 const  Loader = (props) => {
    const {size,thickness,color}  = props;
    return(
        <>
                <CircularProgress
                                      size={size}
                                      thickness={thickness}
                                      sx={{
                                          color,
                }}/>

        </>
    )
   
}

export default Loader;