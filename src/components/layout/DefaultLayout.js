import Footer from "components/Footer/Footer";
import IndexNavbar from "components/Navbars/IndexNavbar";
import React from "react";
import { useLocation } from "react-router";

const DefaultLayout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes("/admin") && <IndexNavbar />}
      {children}
      {!location.pathname.includes("/admin") && <Footer />}
    </>
  );
};

export default DefaultLayout;
