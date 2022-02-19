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

     }
});

export default muiStyle;