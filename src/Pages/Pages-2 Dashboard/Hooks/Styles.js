/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Dashboard: {
    backgroundColor: "#fff",
    display: "flex",
    height: "100vh",
    // alignItems:"center",
    // justifyContent:'space-between'
    width: "100%",
  },
  Abs: {
    width: "40%",
    height: "100%",
    backgroundColor: "#fff",
  },
  RightABs: {
    width: "20%",
    height: "100%",
    // backgroundColor: "#fff",
    // color:"#000",
    position: "absolute",
    right:0
  },
  Item:{
    backgroundColor: "#fcc",
    color:"#000"  
  }
}));
export default useStyles;
