import { Box, TextField } from "@material-ui/core";
import React from "react";
import useStyles from "./Hooks/Styles";
import {UseSearch} from"./Hooks/UseSearch"


function SearchBox() {
  const classes = useStyles();

  const {Search,handelChange} = UseSearch

  return (
    <Box className={classes.SearchBox}>
      <TextField
        className={classes.inputStyles}
        variant="outlined"
        label={"search"}
        name="search"
        type="input"
        value={Search}
        onChange={handelChange}
        required
        autoFocus
      />
    </Box>
  );
}

export default SearchBox;
