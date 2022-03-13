/*
    This is style file for all components on all page
    @author : Shantanu Kulkarni
*/
import { makeStyles } from "@mui/styles";

const Style = makeStyles({
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
  wd_select:{
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
  },
  wd_go_btn:{
    width: '120px',
    height: '52px',
    background: '#2D3748',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px'
  },
  wd_service_card:{
      marginTop: '-2.2rem',
      boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 1px 12px rgba(0, 0, 0, 0.04)',
      borderRadius: '12px',
      maxWidth:'96rem',
  },
  wd_offer_card:{
    background: '#3F51B5',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '2px',
    height: '415px',
  },
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
    fontSize: "28px",
    lineHeight: "38px",
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
    fontSize: "16px !important",
    lineHeight: "36px !important",
    width: "355px",
    height: "52px",
    color: "#ffffff !important",
    textAlign: "center",
    marginTop: "66px",
  },

  auth_head: {"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"bold","fontSize":"28px","lineHeight":"42px","color":"#1A202C",justifyContent:"center"},
  forget_pass_text: {"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"normal","fontSize":"18px","lineHeight":"27px","color":"#2C5282"},
  authform: {top:"40px"},
  login_btn:{
      borderRadius: "5px",
      width:"20rem",
      height:"50px",
  },
  centerBox: {
      justifyContent: "center",
      alignItems: "center"
    },
    loginbutton:{
        backgroundColor:"#3f51b5",
    },


  
 
});

export default Style;