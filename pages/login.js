import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="d-flex ">
      <LoginForm />
    </div>
  );
}
