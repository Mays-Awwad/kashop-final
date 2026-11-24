
import { createTheme } from '@mui/material/styles';

const theme=createTheme({
     spacing:3,

     palette: {
      mode:'light',

    primary:{
      main:'#7e8282',
      light:'#636ff5',
      dark:'#e75959',
      contrastText:'#fff',
    },
    /*
    background:{
      default:'#a15f5fdd'
    },*/
    success:{
      main:'#ff00dd'
    },
    typography:{
      body1:{fontSize:'1rem'},
      h1:{fontSize:'2rem'},
      button:{fontSize:'1rem'}
    }
  },

})


export default theme;
