/*
    This is style file for all components on all page
    @author : Shantanu Kulkarni
*/
import {
    makeStyles
} from "@mui/styles";

const customStyle = makeStyles({
    ThirdCard: {
        background: "#FFFFFF",
        boxShadow: "rgb(65 62 101 / 10%) 0px 4px 4px",
        borderRadius: "8px",
        Maxwidth: "100%",
        marginTop: "4px",
        padding: "1px",
    },
    wdSubcategories: {
        background: "#FFFFFF ",
        border: "0.5px solid #000000 ",
        boxSizing: "border-box ",
        borderRadius: "8px ",
        width: "16rem ",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "16px ",
        lineHeight: "31px ",
        color: "#000000",
        marginLeft: "2rem "
    },
    wdSubcategoriesActive: {
        background: "#2D3748",
        color: "#ffffff",
    },
    wd_myprofile_layout: {
        marginTop: "1rem",
    },
    ServiceCard: {
        background: "#FFFFFF",
        boxShadow: "rgb(65 62 101 / 10%) 0px 4px 4px",
        borderRadius: "8px ",
    },

    wdServiceCardh1: {
        fontWeight: "600 ",
        fontSize: "24px ",
        lineHeight: "42px ",
        color: "#000000 ",
        whiteSpace: 'pre-line',

    },
    wdServiceCardSubtitle: {
        fontWeight: "600 ",
        fontSize: "15px ",
        lineHeight: "2rem ",
        color: "#444444 ",
        whiteSpace: 'pre-line',
      
    },
    wdRating: {
        marginLeft: "2.2rem ",
        paddingTop: "0.5rem ",
        marginTop: "0.5rem",
    },
    ratingText: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600 !important",
        fontSize: "18px !important",
        lineHeight: "36px !important",
        color: " #008000",
        marginLeft: "1rem ",

    },
    servicePricing: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600 !important",
        fontSize: "24px !important",
        lineHeight: "36px !important",
        color: "#000000",
        float: "right",
        marginRight: "2.6rem",
        marginTop: "-25px",
    },
    bookService: {
        float: "right",
        marginRight: "0.8rem",
        backgroundColor: "#3F51B5",
        marginBottom: "0.8rem",
    },
    viewService: {
        float: "right",
        marginRight: "1rem",
    },
    services_img:{
        display: "block",
        height: "180px",
        width: "300px",
        marginLeft: "auto",
        marginRight: "auto",
       
      }
  

});

export default customStyle;