import LandingHero from "../LandingHero";

export default function LandingLayout({ children, title = "This is the default title" }) {
  return (
    <div style={{ marginTop: "10%" }} className="d-flex align-items-center">
      {children}
    </div>
  );
}
