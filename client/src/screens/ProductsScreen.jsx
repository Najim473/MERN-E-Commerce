import { Center, Wrap, WrapItem, Spinner, Stack } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions.js";
import { useEffect } from "react";
const ProductsScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  // eslint-disable-next-line
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Wrap spacing="30px" justify="center" minHe="100vh">
      {loading ? (
        <Stack driction="row" spacing={4}>
          <Spinner
            mt={20}
            thickness="5px"
            speed=".5s"
            emptyColor="gray.200"
            color="orange.500"
            size="xl"
          />
        </Stack>
      ) : error ? (
        <p>Error</p>
      ) : (
        products.map((product) => (
          <WrapItem key={product._id}>
            <Center w="250px" h="550px">
              <ProductCard product={product} />
            </Center>
          </WrapItem>
        ))
      )}
    </Wrap>
  );
};
export default ProductsScreen;
