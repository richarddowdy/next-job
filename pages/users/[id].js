import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../..//styles/Home.module.css";

export default function User() {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query, id);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log("WHAT IS", id);
    if (router.isReady) {
      setIsLoading(true);
      const fetchUserData = async () => {
        const { data } = await axios.get(`/api/users/${id}`);
        console.log("THIS SHOULD BE THE USER DATA.", data);
        setUserData(data);
        console.log(userData);
      };

      fetchUserData();
      setIsLoading(false);
    }
  }, [router.isReady]);

  console.log("trying to iterate this", Object.keys(userData));

  return (
    <>
      {isLoading ? (
        <> LOADING </>
      ) : (
        <>
          <Link href={"/users"}> GO Back to Users</Link>
          <h2>Profile for {userData.username}</h2>
          {Object.entries(userData).map((pair) => {
            console.log("inside", pair);
            return (
              <p key={pair[0]}>
                {pair[0]} --- {pair[1]}
              </p>
            );
          })}
        </>
      )}
    </>
  );
}
