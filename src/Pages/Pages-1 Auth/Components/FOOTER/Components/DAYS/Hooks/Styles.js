/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Current: {
    backgroundColor: "#eee9",
    display: "flex",
    color: "#050505",
    width: "90%",
    borderRadius: "3px",
    flexWrap: 'wrap',
    justifyContent:'space-between',
    // paddingLeft:35,
    padding: "5px 15px",
    margin: "5px 0px",
    overflowY: "scroll"


  },
  TextZone: {
    color: "#050505",
    fontSize: "20px",
    fontWeight: "400",
  },
  TempBox: {
    // height: "12vh",
    display: "flex",
    backgroundColor: "#ccc5",
    // width: "10%",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 33,
    width: "100%",
    margin: "1px 10px 10px 2px",
    // border:'.5px solid rgba(0, 41, 132,0.2)',
    borderRadius:'3px',

  },
  TempBox2:{
   // height: "12vh",
   display: "flex",
   backgroundColor: "#ccc5",
   // width: "10%",
   alignItems: "center",
   justifyContent: "center",
   fontSize: 23,
   width: "100%",
   margin: "9px 10px 10px 2px",
   // border:'.5px solid rgba(0, 41, 132,0.2)',
   borderRadius:'3px',
   padding:'12px 0'
   
  },
  Status: {
    fontSize: "16px",
    margin: "5px 0px",
    color: "#002984",
  },
  itemTempText: {
    fontSize: "18px",
    fontWeight: "600",
  },
  icon: {
    fontSize: "14px",
    margin: "5px 0px",
    color: "#002984",
  },
  JoursLeft:{
    display:'flex',
    flexDirection: 'column',
    // backgroundColor: "#fff",
    width:'25%'
  },
  JoursRight:{
    display:'flex',
    flexDirection: 'column',
    // backgroundColor: "#fff",
    width:'73%'
  },
  DaysItems:{

  }

}));
export default useStyles;
