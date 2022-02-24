/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    Current: {
    backgroundColor: "#eee9",
    display: "flex",
    color: "#050505",
    width:'90%',
    padding:15,
    margin:'5px 0px',
    borderRadius:"3px",
    flexDirection: 'column',

  },
  TextZone:{
      color:"#050505",
      fontSize:'20px',
      fontWeight:'400',
      

  },
  TempBox:{
      height:"10vh",
      display:'flex',
    //   backgroundColor: "#ccc",
      width:'30%',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize:33,
      marginLeft:5
  },
  itemTempImage:{
    height:"10vh",
    display:'flex',
    // backgroundColor: "#cc0",
    width:'40%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  Text:{
    color:"#050505",
    fontSize:'22px',
    fontWeight:'600'
  },
  Row:{
      display:'flex',
      width:'100%',
      justifyContent: 'space-between',
  }

}));
export default useStyles;
