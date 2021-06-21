import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
// import "tailwindcss/tailwind.css";

import MainLayout from "../components/layouts/MainLayout";
import DefaultLayout from "../components/layouts/DefaultLayout";

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
