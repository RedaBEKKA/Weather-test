/* eslint-disable */

import React from "react";

// externel
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";

// pages
import Dashboard from "./Pages/Pages-2 Dashboard/index";
import Errorpage from "./Pages/pages-3 Error/index.js";
import Success from "./Pages/Pages-4 Success/index.js";
import Login from "./Pages/Pages-1 Auth/index.js";

// theme
import theme from "./theme/theme";




const App = () => {
  const auth = useSelector((state) => state.auth);
  const { isAuth } = auth;
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/error" element={<Errorpage />} />
          <Route exact path="/Success" element={<Success />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="*" element={<Errorpage />} />
          <Route
            exact
            path="dashboard"
            element={isAuth ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/"
            element={
              isAuth ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
