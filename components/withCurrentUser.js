import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useLocalStorage from "../utils/hooks/useLocalStorage";
import { TOKEN_STORAGE_ID } from "../pages/_app";

const WithCurrentUser = (Component) => {
  const NewComponent = (props) => {
    // const [infoLoaded, setInfoLoaded] = useState(false);
    // const [currentUser, setCurrentUser] = useState(null);
    // console.log(children);
    const dispatch = useDispatch();

    const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
    // console.log(token);

    useEffect(() => {
      async function getCurrentUser() {
        try {
          let { username } = decode(token);
          let currentUser = await API.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          setCurrentUser(null);
        }
        // setInfoLoaded(true);
      }
      // setInfoLoaded(false);
      // getCurrentUser();
    }, [token]);

    // const handleLogOut = () => {
    //   setCurrentUser(null);
    //   setToken(null);
    // };
    // console.log(setToken);
    return <Component {...props} setToken={setToken} />;
  };
  return NewComponent;
};

export default WithCurrentUser;
