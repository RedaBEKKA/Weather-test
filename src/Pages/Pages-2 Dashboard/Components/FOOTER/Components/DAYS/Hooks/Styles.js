/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Current: {
    backgroundColor: "#eee9",
    display: "flex",
    color: "#050505",
    width: "90%",
   
    borderRadius: "3px",
    // outline:'hidden',
    flexWrap: 'wrap',
    // justifyContent:'center',
    // paddingLeft:35,
    padding: "5px 10px 0px 25px",
    margin: "5px 0px",

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
    width: "33%",
    margin: "1px 20px 10px 2px",
    flexDirection: "column",
    border:'.5px solid rgba(0, 41, 132,0.2)',
    borderRadius:'3px',
    flexWrap: 'wrap',

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
  BoxWeaather:{
    margin:"5px 5px",
    display:"flex",
    flexDirection: 'column',
    backgroundColor: "#0384",
    width:"65px",
    padding:5,
    height:50,
    borderRadius:'6px',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    
  },
  Text:{
    color:"#002984",
    fontSize:11
  },
  row:{
    display:'flex',
    alignItems: 'center',
    // backgroundColor: "#fff",
    // justifyContent: 'space-between',
    width:'100%'
  },
  description:{
    color:"#000",
    opacity:"0.9",
    fontSize:9,
    fontWeight:500,
    marginTop:-12,
    width:"100%"

  },
  AbsDay:{
    // backgroundColor: "#0003",
    borderRadius:'10px',
    width:'20px',
    height:'20px',
    position: 'absolute',
    top:'4px',
    right:1,
    fontSize:9
  }
}));
export default useStyles;
