import React from "react";
import AppRoute from "../../routes/AppRoute";
import { BrowserRouter as Router } from "react-router-dom";
import glamorous from "glamorous";
import FlexView from "./FlexView";
import SideBar from "./SideBar";
import Main from "./Main";
import Footer from "./Footer";

const Container = glamorous(FlexView)({
  height: "calc(100vh - 51px)",
  flexDirection: "row"
});

const ContentContainer = glamorous(FlexView)({
  width: "calc(100% - 260px)"
});

const Content = () => {
  return (
    <Router>
      <Container>
        <SideBar />
        <ContentContainer>
          <Main>
            <AppRoute />
          </Main>
          <Footer />
        </ContentContainer>
      </Container>
    </Router>
  );
};

export default Content;
