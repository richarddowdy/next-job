import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { loginUser, logoutCurrentUser, logoutUser } from "../../redux/actions/userActions";

export default function LoginForm({ setToken }) {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Username required.";
        }
        if (/([^a-z,A-Z,0-9])/.test(values.username)) {
          errors.username = "Username can only be letters or numbers.";
        }
        if (!values.password) {
          errors.password = "Password required.";
        }
        if (values.password && values.password.length < 5) {
          errors.password = "Password must be at least 5 characters.";
        }
        return errors;
      }}
      onSubmit={async (values) => {
        console.log(values);
        let result = await dispatch(loginUser(values));
        const { token } = result.user;
        setToken(token);
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
        <Form style={{ borderRadius: "15%", padding: "50px" }} className="m-auto shadow" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="RockStar123"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={errors.username && touched.username && errors.username}
            />
            <Form.Text className="text-muted"></Form.Text>
            <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={errors.password && touched.password && errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" className="mr-4">
            Submit
          </Button>
          <Button variant="primary" onClick={() => dispatch(logoutCurrentUser())}>
            Logout
          </Button>
        </Form>
      )}
    </Formik>
  );
}
