import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import ProfileForm from "../../../components/user/ProfileForm";
import API from "../../../API";

export default function UserProfile() {
  const router = useRouter();
  const { username } = router.query;
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (router.isReady) {
      const fetchUserData = async () => {
        const userResponse = await API.getCurrentUser(username, true /*, true */);
        setUserData(userResponse);
      };
      fetchUserData();
    }
  }, [router.isReady]);

  return (
    <Container>
      {!userData.username ? (
        <> LOADING </>
      ) : (
        <>
          <Row className="mt-5 justify-content-around">
            <Col xs={(12, "auto")} sm={(4, "auto")}>
              <h2 className="text-center">{username}</h2> {/* add some silly ass font */}
              <img
                src="data:image/png;base64,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"
                alt="User avatar image"
              />
            </Col>
            <Col xs={12} sm={8}>
              <h2>Reset user profile info</h2>
              <ProfileForm userData={userData} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}
