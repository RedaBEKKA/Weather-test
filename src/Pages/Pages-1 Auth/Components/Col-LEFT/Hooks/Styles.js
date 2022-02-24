/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    DayInfo:{
        backgroundColor: '#fff',
        display:'flex',
        color:'#237a59',
        position: "relative",
    },
    Abs:{
        position: "absolute",
        zIndex:10,
        left:150,
        bottom:100,
        // opacity:"0.5"

    },
    Heur:{
        fontSize:'60px',
        color:"#fff",
        textShadow:'2px 2px 5px #000',
        fontWeight:'400'
    },
    AbsBtn:{
        position: "absolute",
        zIndex:10,
        left:15,
        top:15,
    },
    Icon:{
        color:"#000",
        backgroundColor: "#fff",
        fontSize:40,
        padding: 5,
        borderRadius:6,
        cursor:"pointer"
        
    }

}));
export default useStyles;
