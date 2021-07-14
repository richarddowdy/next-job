import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import API from "../../../API";

export default function UserProfile() {
  const router = useRouter();
  const { username } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // console.log("WHAT IS", username);
    if (router.isReady) {
      setIsLoading(true);
      const fetchUserData = async () => {
        const userResponse = await API.getCurrentUser(username);
        // console.log("THIS SHOULD BE THE USER DATA.", userResponse);
        setUserData(userResponse);
      };

      fetchUserData();
      setIsLoading(false);
    }
  }, [router.isReady]);

  return (
    <>
      {isLoading ? (
        <> LOADING </>
      ) : (
        <>
          <Link href={"/users"}> GO Back to Users</Link>
          <h2>Profile for {username}</h2>
          {Object.entries(userData).map((pair) => {
            // console.log("inside", pair);
            return (
              <p key={pair[0]}>
                {pair[0]} --- {pair[1] || "NONE"}
              </p>
            );
          })}
        </>
      )}
    </>
  );
}
