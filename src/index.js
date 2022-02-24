import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DataProvider from "./Redux/store";
import Loading from "./Components/Loading/Loading";
import { Box } from "@material-ui/core";

ReactDOM.render(
  <Suspense
    fallback={
      <Box
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loading />
        <Box style={{ fontFamily: "", fontWeight: 600 , }}>Chargement ...</Box>
      </Box>
    }
  >
    <DataProvider>
      <App />
    </DataProvider>
  </Suspense>,
  document.getElementById("root")
);