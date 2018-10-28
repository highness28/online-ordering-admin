import glamorous from "glamorous";

const FlexView = glamorous.div(
  ({ display, row, item, flex, align, justify, padding }) => ({
    display: display || "flex",
    flexDirection: row ? "row" : "column",
    margin: item ? "5px 0px" : 0,
    flex: flex || "none",
    alignItems: align || "initial",
    justifyContent: justify || "initial",
    padding: padding || 0,
    flexWrap: row ? "wrap" : "nowrap"
  })
);

export default FlexView;
