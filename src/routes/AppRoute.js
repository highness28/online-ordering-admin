import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../containers/dashboard";
import Orders from "../containers/orders";
import FeaturedCategory from "../containers/featuredCategory";
import Products from "../containers/products";
import Brand from "../containers/brand";
import Category from "../containers/category";
import Sales from "../containers/sales";
import Inventory from "../containers/inventory";

const AppRoute = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/featured" component={FeaturedCategory} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/brand" component={Brand} />
      <Route exact path="/category" component={Category} />
      <Route exact path="/sales" component={Sales} />
      <Route exact path="/inventory" component={Inventory} />
    </React.Fragment>
  );
};

export default AppRoute;
