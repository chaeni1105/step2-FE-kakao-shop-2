import "../../styles/molecules/ProductInformationColumn.css";
import { comma } from "../../utils/convert"; // eslint-disable-line no-unused-vars
import Photo from "../atoms/Photo";
import Box from "../atoms/Box";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const ProductInformationColumn = ({ product }) => {
  const { productName, id } = product;
  return (
    <Box className="w-[1024px] m-4">
      <Photo
        className="card"
        src={staticServerUrl + `/images/${id}.jpg`}
        alt={productName}
      />
    </Box>
  );
};

export default ProductInformationColumn;