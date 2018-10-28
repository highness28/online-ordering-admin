import React from "react";
import glamorous from "glamorous";
import FlexView from "./FlexView";

const Container = glamorous(FlexView)({
  height: "calc(100% - 70px)",
  padding: 15,
  overflowY: "auto"
});

const Main = props => {
  return <Container>{props.children}</Container>;
};

export default Main;
