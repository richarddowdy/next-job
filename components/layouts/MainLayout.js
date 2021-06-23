import Link from "next/link";
import Head from "next/head";
// import { Navbar, Nav } from "react-bootstrap";
import SiteNav from "../SiteNav";

export default function MainLayout({ children, title = "Next-Job" }) {
  return (
    <div className="" id="MainLayout">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SiteNav />

      {children}
    </div>
  );
}
