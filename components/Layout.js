import Link from "next/link";
import Head from "next/head";
import { Navbar, Nav } from "react-bootstrap";

export default function Layout({ children, title = "This is the default title" }) {
  return (
    <>
      {/* <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */}
      <Navbar bg="light" expand="lg">
        <Link href="/" passHref>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/users" passHref>
              <Nav.Link>Users</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {children}

      <footer>{"I`m here to stay"}</footer>
    </>
  );
}
