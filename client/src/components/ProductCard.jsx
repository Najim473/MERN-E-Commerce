import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Tooltips,
  Stack,
  Link,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Link as ReactLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";
const ProductCard = ({ product }) => {
  console.log(product.image);
  return (
    <div>
      <Stack
        p={2}
        spacing="30px"
        bg={useColorModeValue("white", "gray.800")}
        minW="240px"
        h="450px"
        borderWidth="10px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {product.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="green.300"
          />
        )}
        {product.stock <= 0 && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.300"
          />
        )}
        <Image scr={product.image} alt={product.name} roundTop="lg" />
        <Box></Box>
      </Stack>
    </div>
  );
};
export default ProductCard;
