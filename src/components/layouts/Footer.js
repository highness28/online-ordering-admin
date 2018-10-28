import React from "react";
import glamorous from "glamorous";
import FlexView from "./FlexView";

const Container = glamorous(FlexView)({
  height: 40,
  padding: "0 20px",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#F5F5F5"
});

const Copyright = glamorous.label({
  fontWeight: 5,
  fontSize: 12
});

const Footer = () => {
  return (
    <Container>
      <Copyright>
        All rights reserved &copy; Orite Copier and Supplies
      </Copyright>
    </Container>
  );
};

export default Footer;
