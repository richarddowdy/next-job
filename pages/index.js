import LandingLayout from "../components/layouts/LandingLayout";
import LandingHero from "../components/LandingHero";
import { useSelector } from "react-redux";

export default function Home() {
  const STORE = useSelector((state) => state);
  const currentUser = useSelector((state) => state.user);

  console.log("CURRENT STORE", STORE);
  console.log("CURRENT USER", currentUser);
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
