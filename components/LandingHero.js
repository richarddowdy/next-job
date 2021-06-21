import { Button } from "react-bootstrap";
import Link from "next/link";
import LoginForm from "./auth/LoginForm";
export default function LandingHero() {
  return (
    <div>
      <h1
      // className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1"
      >
        Find your Next-Job
      </h1>
      <p
      // className="leading-normal text-base md:text-2xl mb-20 text-center md:text-left slide-in-bottom-subtitle"
      >
        Welcome to the jobsite where you can easily browse and apply to available job listings.
      </p>
      <div
      // className={"flex items-center justify-around w-100"}
      >
        <LoginForm />
      </div>
    </div>
  );
}
