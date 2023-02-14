import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { products } from "../products";
const ProductsScreen = () => {
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
