import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LandingLayout from "../components/layouts/LandingLayout";
import LandingHero from "../components/LandingHero";

export default function Home() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <LandingHero />
      </div>
      <div className="col-lg-6">col-6</div>
    </div>
  );
}

Home.Layout = LandingLayout;
