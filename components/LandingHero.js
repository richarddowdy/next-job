import { Button } from "react-bootstrap";
export default function LandingHero() {
  return (
    <>
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
        <Button
        // className={
        //   "bg-blue-200 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        // }
        >
          Login
        </Button>
        <Button
        // className={
        //   "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        // }
        >
          Sign Up
        </Button>
      </div>
    </>
  );
}
