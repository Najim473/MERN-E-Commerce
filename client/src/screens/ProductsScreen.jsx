import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions.js";
import { useEffect } from "react";
const ProductsScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;
  console.log("productScreen");
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Wrap spacing="30px" justify="center" minHe="100vh">
      {products.map((product) => (
        <WrapItem key={product.id}>
          <Center w="250px" h="550px">
            <ProductCard product={product} />
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  );
};
export default ProductsScreen;
