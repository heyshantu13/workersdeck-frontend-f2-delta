import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },

  serviceDetailCard: {
    background: "#FFFFFF",
    boxShadow: "rgb(65 62 101 / 10%) 0px 4px 4px",
    borderRadius: "6px",
    Maxwidth: "100%",
    marginTop: "4px",
    padding: "1px",
},

servicePricing: {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "28px",
  color: "#000000",
},
estimatetime:{
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "28px",
  color: "#000000",
  marginLeft:"0.8rem",

},

servicetitle: {
  fontWeight: "600 ",
  fontSize: "20px ",
  lineHeight: "42px ",
  color: "#000000 ",
  whiteSpace: 'pre-line',

},

bookService2: {
  backgroundColor: "#3F51B5",
  float: "right",
  marginRight: "0.8rem",
},
btnText:{
  textDecoration: "none",
  color: "black",
  "&:hover": {
    color: "#3f51b5",
  },
},

homeText:{

}

});


 export default useStyles;