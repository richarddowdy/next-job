import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
// import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "../redux/store";

import MainLayout from "../components/layouts/MainLayout";
import DefaultLayout from "../components/layouts/DefaultLayout";

export const TOKEN_STORAGE_ID = "next_job_token";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout; //TODO make a DefaultLayout

  //   function async getInitialProps({Component, ctx}) {
  //     const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //     //Anything returned here can be accessed by the client
  //     return {pageProps: pageProps};
  // }

  return (
    <Provider store={store}>
      <MainLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
