import React from "react";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
