import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
// import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "../redux/store";

import MainLayout from "../components/layouts/MainLayout";
import DefaultLayout from "../components/layouts/DefaultLayout";
import WithCurrentUser from "../components/withCurrentUser";

export const TOKEN_STORAGE_ID = "next_job_token";
export const WINDOW_GLOBAL = typeof window !== "undefined" && window;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout; //TODO make a DefaultLayout
  const ComponentWithCurrentUser = WithCurrentUser(Component);

  return (
    <Provider store={store}>
      <MainLayout>
        <Layout>
          <ComponentWithCurrentUser {...pageProps} />
        </Layout>
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
