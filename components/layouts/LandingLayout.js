import LandingHero from "../LandingHero";

export default function LandingLayout({ children, title = "This is the default title" }) {
  return <div className="container">{children}</div>;
}
