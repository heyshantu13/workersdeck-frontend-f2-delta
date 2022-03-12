/*
    This is style file for all components on all page
    @author : Shantanu Kulkarni
*/
import { makeStyles } from "@mui/styles";

const customStyle = makeStyles({
  // Nav Bar
  menu_content: {
    justifyContent: "right",
  },
  wd_logo: {
    fontWeight: "800",
    fontSize: "52px",
    lineHeight: "84px",
  },
  wd_text: {
    justifyContent: "right",
    fontSize: "16px",
    lineHeight: "34px",
  },
  wd_navbar: {
    position: "absolute",
    height: "72px",
    left: "0px",
    top: "0px",
    background: "#fffffa",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  btn_action_1: {
    background: "#3f51b5 !important",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) !important",
    borderRadius: "8px !important",
    color: "#fff !important",
    width: "185px !important",
    height: "52px !important",
    marginRight: "39px !important",
  },
  btn_action_2: {
    background: "#2D3748 !important",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) !important",
    borderRadius: "8px !important",
    color: "#fff !important",
    width: "185px !important",
    height: "52px !important",
    marginRight: "39px !important",
  },

  // Styes For Banner elements
  offetTextOne: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "38px",
    lineHeight: "45px",
    marginTop: "67px",
    textAlign: "center",
    letterSpacing: "0.08em",
    color: "#ffffff",
  },
  offetTextTwo: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "38px",
    lineHeight: "45px",
    marginTop: "24px",
    textAlign: "center",
    letterSpacing: "0.08em",
    color: "#ffffff",
  },
  bookNowBtn: {
    background: "#2d3748 !important",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) !important",
    borderRadius: "8px !important",
    fontStyle: "normal",
    fontWeight: "bold !important",
    fontSize: "24px !important",
    lineHeight: "36px !important",
    width: "355px",
    height: "52px",
    color: "#ffffff !important",
    textAlign: "center",
    marginTop: "66px",
  },
  // Footer Style

  footer_text_logo: {
    fontStyle: "normal !important",
    fontWeight: "800 !important",
    fontSize: "64px !important",
    lineHeight: "96px !important",
    color: "#ffffff !important",
  },

  SecondaryCard: {
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
    height: "493px",
  },

  ThirdCard: {
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
    height: "92px",
  },
  ServiceCard: {
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25) !important",
    borderRadius: "8px !important",
    height: "246px",
  },
  CheckoutCard:{
    background: "#FFFFFF",  
  border: '1px solid rgba(0, 0, 0, 0.25)',
  boxSizing: 'border-box',
  height: '280px',
  },
 
});

export default customStyle;