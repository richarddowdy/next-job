// import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import MainLayout from "../components/layouts/MainLayout";
import DefaultLayout from "../components/layouts/DefaultLayout";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout; //TODO make a DefaultLayout

  return (
    <MainLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainLayout>
  );
}

export default MyApp;
