import React from "react";
import glamorous from "glamorous";
import FlexView from "./FlexView";

const Container = glamorous(FlexView)({
  height: 50,
  backgroundColor: "#212121",
  flexDirection: "row",
  alignItems: "center"
});

const Title = glamorous.label({
  fontWeight: "bold",
  fontSize: 20,
  color: "white",
  flex: 1,
  marginLeft: 20
});

const InfoTab = glamorous(FlexView)({
  fontWeight: "bold",
  fontSize: 14,
  color: "white",
  justifyContent: "center",
  marginRight: 20
});

const NavBar = () => {
  return (
    <Container>
      <Title>Orite copier and supplies</Title>
      <InfoTab>German Manalili</InfoTab>
    </Container>
  );
};

export default NavBar;
