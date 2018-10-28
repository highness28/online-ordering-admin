import React from "react";
import glamorous from "glamorous";
import CardContainer from "../../components/common/CardContainer";
import FlexView from "../../components/layouts/FlexView";

const Container = glamorous(FlexView)({
  flexDirection: "row",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

const StatCard = glamorous(CardContainer)({
  height: 100,
  width: "calc(25% - 50px)"
});

const Dashboard = () => {
  return (
    <div>
      <Container>
        <StatCard>Stat 1</StatCard>
        <StatCard>Stat 2</StatCard>
        <StatCard>Stat 3</StatCard>
        <StatCard>Stat 4</StatCard>
      </Container>
    </div>
  );
};

export default Dashboard;
