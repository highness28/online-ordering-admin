import React from "react";
import glamorous from "glamorous";
import FlexView from "./FlexView";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BaseNavLink from "../common/NavLink";
import {
  Dashboard as BaseDashboard,
  ShoppingCart as BaseOrders,
  Bookmarks as BaseFeaturedCategory,
  AddPhotoAlternate as BaseProducts,
  BurstMode as BaseBrand,
  Category as BaseCategory,
  PieChart as BaseSales,
  MoveToInbox as BaseInventory
} from "@material-ui/icons";

const Container = glamorous(FlexView)({
  backgroundColor: "#212121",
  height: "100%",
  width: 260,
  borderTop: "1px solid #424242"
});

const NavLink = glamorous(BaseNavLink)({
  textDecoration: "none",
  "& > div span": {
    color: "#616161",
    fontWeight: 500
  },
  "& > div:hover": {
    backgroundColor: "#BDBDBD",
    "& > div svg": {
      color: "#212121"
    },
    "& > div span": {
      color: "#212121"
    }
  },
  ".active": {
    "& > div span": {
      color: "#E0E0E0",
      fontWeight: 1000
    },
    "& > div svg": {
      color: "#E0E0E0"
    }
  }
});

const IconStyle = { color: "#616161" };
const DashboardIcon = glamorous(BaseDashboard)(IconStyle);
const OrdersIcon = glamorous(BaseOrders)(IconStyle);
const FeaturedIcon = glamorous(BaseFeaturedCategory)(IconStyle);
const ProductsIcon = glamorous(BaseProducts)(IconStyle);
const BrandIcon = glamorous(BaseBrand)(IconStyle);
const CategoryIcon = glamorous(BaseCategory)(IconStyle);
const SalesIcon = glamorous(BaseSales)(IconStyle);
const InventoryIcon = glamorous(BaseInventory)(IconStyle);

const icons = {
  dashboard: <DashboardIcon />,
  orders: <OrdersIcon />,
  featured: <FeaturedIcon />,
  products: <ProductsIcon />,
  brand: <BrandIcon />,
  category: <CategoryIcon />,
  sales: <SalesIcon />,
  inventory: <InventoryIcon />
};

const NavLinkItem = ({ path, title, icon }) => (
  <NavLink exact to={path}>
    <ListItem button>
      <ListItemIcon>{icons[icon]}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  </NavLink>
);

const SideBar = () => {
  return (
    <Container>
      <List component="nav">
        <NavLinkItem path="/" title="Dashboard" icon={"dashboard"} />
        <NavLinkItem path="/orders" title="Orders" icon={"orders"} />
        <NavLinkItem
          path="/featured"
          title="Featured Category"
          icon={"featured"}
        />
        <NavLinkItem path="/products" title="Products" icon={"products"} />
        <NavLinkItem path="/brand" title="Brand" icon={"brand"} />
        <NavLinkItem path="/category" title="Category" icon={"category"} />
        <NavLinkItem path="/sales" title="Sales" icon={"sales"} />
        <NavLinkItem path="/inventory" title="Inventory" icon={"inventory"} />
      </List>
    </Container>
  );
};

export default SideBar;
