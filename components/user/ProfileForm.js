import { Form, Row, Col, Button } from "react-bootstrap";
import { Formik } from "formik";

export default function ProfileForm({ userData }) {
  console.log("THIS", userData);
  const { username, email, employer_handle, image_url, companyHandles } = userData;

  console.table("WTF are these", [username, email, employer_handle]);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        username: username || "",
        email: email || "",
        employer: employer_handle || "",
        image_url: image_url || "",
      }}
      validate={(values) => {
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
            <Form.Group as={Col} md={6} controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="test@test.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={errors.email && touched.email && errors.email}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md={3} controlId="formBasicEmployer">
              <Form.Label>Employer</Form.Label>
              <Form.Control
                as="select"
                type="text"
                name="employer"
                defaultValue={values.employer || ""}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">None</option>
                {companyHandles.map((company) => {
                  return (
                    <option key={company.handle} value={company.handle}>
                      {company.handle}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                placeholder="http://image.com"
                value={values.image_url}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={errors.image_url && touched.image_url && errors.image_url}
              />
              <Form.Text className="text-muted"></Form.Text>
              <Form.Control.Feedback type="invalid">{errors.image_url}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
