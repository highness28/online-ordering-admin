import glamorous from "glamorous";
import FlexView from "../../components/layouts/FlexView";

const CardContainer = glamorous(FlexView)(({ padding, margin, height }) => ({
  padding: padding ? padding : 15,
  margin: margin ? margin : 5,
  marginBottom: 10,
  boxShadow: "1px 1px 10px #BDBDBD",
  height: height ? height : "1000px"
}));

export default CardContainer;
