import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import image from "../assets/result.svg";
import Box from "@mui/material/Box";
import { Formik, Form } from "formik";
import LockIcon from "@mui/icons-material/Lock";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { object, string } from "yup";
import useAuthCall from "../hooks/useAuthCall"
import {Link} from "react-router-dom"

const Login = () => {
  const {login}=useAuthCall()

  let loginScheme = object({
    email: string()
      .email("Please enter a valid email")
      .required("This field is required"),
    password: string()
      .required("Password is required")
      .min(8, "Password must at least 8 characters")
      .max(16, "Password must be at most 16 characters")
      .matches(/\d+/, "There must be at least 1 number")
      .matches(/[a-z]/, "There must be at least one lower case")
      .matches(/[A-Z]/, "There must be at least one capital case")
      .matches(
        /[!,?{}><%&$#+-.]/,
        "There must be at least one spacial character"
      ),
  });
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} mb={3}>
          <Typography textAlign={"center"} variant="h3" color={"red"}>
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar sx={{ m: "auto", backgroundColor: "primary.main" }}>
            <LockIcon />
          </Avatar>
          <Typography textAlign={"center"} fontSize={"30px"}>
            Login
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginScheme}
            onSubmit={(values, action) => {
              login(values)
              action.resetForm();
              action.setSubmitting(false);
            }}
          >
            {({ handleChange, handleBlur, values, touched, errors }) => (
              <Form>
                <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
                  <TextField
                    id="email-basic"
                    label="Email"
                    name="email"
                    variant="outlined"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={errors.email}
                  />

                  <TextField
                    id="password-basic"
                    label="Password"
                    name="password"
                    variant="outlined"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={errors.password}
                  />
                  <Button variant="contained" type="submit">Submit</Button>
                </Box>
              </Form>
            )}
          </Formik>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
