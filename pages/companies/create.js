import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Formik } from "formik";

export default function AddNewCompany() {
  return (
    <Formik
      initialValues={{
        companyName: "",
        companyHandle: "",
        numberOfEmployees: "",
      }}
      validate={() => {
        const errors = {};
      }}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md={6} controlId="formBasicUsername">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="YOURCOMPANYHERE"
                value={values.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={errors.companyName && touched.companyName && errors.companyName}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Control.Feedback type="invalid">{errors.companyName}</Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
