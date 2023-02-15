import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  Tooltip,
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
        <Image mt={6} src={product.image} alt={product.name} roundTop="lg" />
        <Box flex="1" maxH="5" alignItems="baseline">
          {product.isNew && (
            <Badge
              rounded="full"
              px="2"
              fontSize="0.8em"
              colorScheme="green"
              mr={`${product.stock <= 0 ? "15px" : ""}`}
            >
              New
            </Badge>
          )}
          {product.stock <= 0 && (
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              Sold out
            </Badge>
          )}

          <Flex justifyContent="space-between" alignContent="center">
            <Link
              as={ReactLink}
              to={`/product${product._id}`}
              pt="2"
              cursor="pointer"
            >
              <Box fontSize="16px" fontWeight="semibold" lineHeight="tight">
                {product.name}
              </Box>
            </Link>
          </Flex>
        </Box>
        <Flex justify="space-between">
          <Box
            mt={39.5}
            fontSize="18px"
            color={useColorModeValue("gray.800", "white")}
          >
            <Box as="span" color={"gray.600"} fontSize="18px">
              $
            </Box>
            {product.price.toFixed(2)}
          </Box>
          <Tooltip
            label="Add to card"
            bg="white"
            placement="top"
            color="gray.800"
            fontSize="12px"
          >
            <Button
              mt={33}
              variant="ghost"
              display="flex"
              disabled={product.stock <= 0}
            >
              <Icon as={FiShoppingCart} h={6} w={6} alignSelf="center" />
            </Button>
          </Tooltip>
        </Flex>
      </Stack>
    </div>
  );
};
export default ProductCard;
