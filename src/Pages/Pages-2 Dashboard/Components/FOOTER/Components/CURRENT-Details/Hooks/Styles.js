/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Current: {
    backgroundColor: "#eee9",
    display: "flex",
    color: "#050505",
    width: "90%",
    padding: "5px 15px",
    margin: "5px 0px",
    borderRadius: "3px",
    flexDirection: "column",
  },
  TextZone: {
    color: "#050505",
    fontSize: "20px",
    fontWeight: "400",
  },
  TempBox: {
    height: "12vh",
    display: "flex",
    // backgroundColor: "#ccc5",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 33,
    width: "50%",
    margin: 5,
    flexDirection: "column",
    border:'.5px solid rgba(0, 41, 132,0.2)',
    borderRadius:'3px'
  },
  Status: {
    fontSize: "16px",
    margin: "5px 0px",
    color: "#002984",
  },
  itemTempText: {
    fontSize: "22px",
    fontWeight: "600",
  },
  icon: {
    fontSize: "14px",
    margin: "5px 0px",
    color: "#002984",
  },
  Row: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
}));
export default useStyles;
