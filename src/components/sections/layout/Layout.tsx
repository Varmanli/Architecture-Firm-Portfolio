import { Outlet } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
