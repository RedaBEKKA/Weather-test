import { Box, Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { Field, Form, Formik } from "formik";
import useStyles from "./Hooks/Styles";
import { useForm } from "./Hooks/useForm";

function FormCol() {
  const classes = useStyles();

  const { location, validationSchema, onSubmit } = useForm();
  return (
    <Box className={classes.FormCol}>
      <Box className={classes.Bienvenue} >
        <Typography variant="h3"  component="h2">Bienvenue</Typography>

        <Typography variant="body1"  >
          Entrez votre nom et votre région pour obtenir vos informations
          météorologiques sur la map
        </Typography>
      </Box>
      <Formik
        className={classes.form}
        initialValues={location}
        validationSchema={validationSchema}
      >
        {(formik) => {
          // console.log("formik", formik);
          return (
            <Form className={classes.InputContainer} onSubmit ={()=>onSubmit(formik.values)}>
              <Field
                className={classes.inputStyles}
                variant="outlined"
                label={"Nom complet"}
                name="fullName"
                type="input"
                as={TextField}
                required
                autoFocus
                helperText={formik.errors.fullName && formik.errors.fullName}
                error={formik.errors.fullName ? true : false}
              />

              <Field
                className={classes.inputStyles}
                variant="outlined"
                label={"Pays"}
                name="Pays"
                type="input"
                as={TextField}
                required
                autoFocus
                helperText={formik.errors.Pays && formik.errors.Pays}
                error={formik.errors.Pays ? true : false}
              />

              <Button
                variant="contained"
                fullWidth
                // onClick={() => {
                //   ;
                // }}
                type="submit"
                sx={{
                  bg: "#237a57",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
}

export default FormCol;
