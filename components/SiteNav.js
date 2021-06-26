import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

export default function SiteNav() {
  return (
    <Navbar className="" expand="lg" bg="light">
      <Link href="/" passHref>
        <Navbar.Brand href="#home" className="m-4" style={{ fontSize: 40, fontWeight: "bold" }}>
          Next-Job
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/users" passHref>
            <Nav.Link>Users</Nav.Link>
          </Link>
          <Link href="/companies" passHref>
            <Nav.Link>Companies</Nav.Link>
          </Link>
          <Link href="/jobs" passHref>
            <Nav.Link>Jobs</Nav.Link>
          </Link>
          <Link href="/login" passHref className="">
            <Nav.Link>Login</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
