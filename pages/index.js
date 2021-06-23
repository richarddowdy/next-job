import LandingLayout from "../components/layouts/LandingLayout";
import LandingHero from "../components/LandingHero";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 justify-content-center">
          <LandingHero />
        </div>
        <div className="col-lg-6">col-6</div>
      </div>
    </div>
  );
}

Home.Layout = LandingLayout;
