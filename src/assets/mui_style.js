import { makeStyles } from '@mui/styles';

const muiStyle = makeStyles({

    wd_primary_btn:{
        background: "#3F51B5",
        color: "#ffffff",
    },
    wd_secondary_btn:{
        background: "#2D3748",
        color: "#ffffff",
    },
    wd_success_btn:{
        background: "#3c763d",
        color: "#ffffff",
    },
    wd_danger_btn:{
        background: "#a94442",
        color: "#ffffff",
    },
    wd_text:{
        "fontFamily":"Poppins",
        "fontStyle":"normal",
        "fontWeight":"normal",
      },

    wd_danger_text:{
            "color":"#a94442"
      },
    wd_success_text:{
        "color":"#3c763d"
     },
     wd_card:{
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '8px',
     },
     sub_cat_btn:{
        background: '#212121',
        borderRadius: '8px',
     },
     sub_cat_btn_invert:{

     },
     addressHead: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: "25px",
        fontFamily: "Poppins",
      },
      address_text:{fontFamily: "Poppins", fontStyle: "normal", fontWeight: "600", fontSize: "21px", lineHeight: "31px", color: "#909090"},
      wd_address_new_text:{
        fontFamily: "Poppins", fontStyle: "normal", fontWeight: "600", fontSize: "1rem", lineHeight: "25px", color: "#3F51B5",textDecoration:"none"
      },
      btn_md :{
        width: "100%",
        height: "52px",
    },
    CheckoutBtn:{
      background: "#3f51b5",
      color: "#fff",
      height: "52px",
    }

});

export default muiStyle;