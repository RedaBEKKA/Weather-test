/** @jsxImportSource theme-ui */

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    FormCol:{
        backgroundColor: '#fffc',
        display:'flex',
        color:'#237a59',
        width:'32vw',
        alignItems:'center',
        flexDirection:'column',
        position: "absolute",
        left:10,
        height:'50.5vh',
        top:8,
        transition:'1s ease-in',
        translate:'translate("200px")',
        borderRadius:6,
        paddingTop:105
        

    },
    InputContainer:{
        display:'flex',
        flexDirection:'column',
        width:'80%',
    },
    inputStyles:{
        margin:'15px 0'
    },
    Bienvenue:{
        // backgroundColor:'#ccc',
        // padding:'15px 30px'
        display:'flex',
        flexDirection:'column',
        width:'80%',
        color:'#050505'
    }

}));
export default useStyles;
