import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function LoginForm({}) {
  const initialState = { username: "", password: "" };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (evt) => {
    evt.preventDefault();
    const { name, value } = evt.target;
    console.log("TYPING EVENTS", name, value);
    setFormData((formData) => {
      return { ...formData, [name]: value };
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <Form style={{ borderRadius: "15%", padding: "50px" }} className="m-auto shadow" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="RockStar123"
            value={formData.username}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
