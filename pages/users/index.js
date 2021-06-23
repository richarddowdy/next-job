import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const UserComponent = ({ data }) => {
  const { id, username, password, email } = data;
  console.log("This is a user", data);
  return (
    <div className="">
      <Link href={`/users/[id]`} as={`/users/${id}`}>
        <a>User {id}</a>
      </Link>
      <p>{username}</p>
      <p>{password}</p>
      <p>{email}</p>
    </div>
  );
};

export default function Users() {
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

  return <>{isLoading ? <> LOADING </> : users.map((user) => <UserComponent data={user} key={user.id} />)}</>;
}
