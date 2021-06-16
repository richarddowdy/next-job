import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LandingLayout from "../components/layouts/LandingLayout";

const UserComponent = ({ data }) => {
  const { id, username, password, email } = data;
  console.log("This is a user", data);
  return (
    <>
      <h2>USER {id}</h2>
      <p>{username}</p>
      <p>{password}</p>
      <p>{email}</p>
    </>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!users.length) {
      setIsLoading(true);
      const fetchTest = async () => {
        const { data } = await axios.get("api/users");
        console.log(data.data);
        setUsers(data.data);
        console.log(users);
        // return data;
      };

      fetchTest();
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <h1>Welcom to Next-Job</h1>
      <p>This is the next best jobsearch site out there. Our only competition is of course Linkedin. They are OK.</p>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
        literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
        College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
        going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </p>
    </>
  );
}

Home.Layout = LandingLayout;
