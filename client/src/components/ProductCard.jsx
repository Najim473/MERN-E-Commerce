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
  Stack,
  Link,
  HStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Link as ReactLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../redux/actions/cartActions";
const Rating = ({ rating, numReviews }) => {
  // eslint-disable-next-line
  const { iconSize, setIconSize } = useState("15px");
  return (
    <Flex>
      <HStack spacing="2px" mr={2}>
        <StarIcon size={iconSize} w="10px" color="orange.500" />
        <StarIcon
          size={iconSize}
          w="10px"
          color={rating >= 2 ? "orange.500" : "gray.200"}
        />
        <StarIcon
          size={iconSize}
          w="10px"
          color={rating >= 3 ? "orange.500" : "gray.200"}
        />
        <StarIcon
          size={iconSize}
          w="10px"
          color={rating >= 4 ? "orange.500" : "gray.200"}
        />
        <StarIcon
          size={iconSize}
          w="10px"
          color={rating >= 5 ? "orange.500" : "gray.200"}
        />
      </HStack>
      <Text fontSize="13px" fontWeight="bold" ml="4px">
        {`${numReviews} ${numReviews === 1 ? "Review" : "Reviews"} `}
      </Text>
    </Flex>
  );
};
const ProductCard = ({ product }) => {
  let price = Number(product.price);
  let productPrice = price.toFixed(2);
  const dispatch = useDispatch();
  const toast = useToast();
  const cartInfo = useSelector((state) => state.cart);
  const { cart } = cartInfo;
  const addItem = (id) => {
    if (cart.some((cartItem) => cartItem.id === id)) {
      toast({
        description:
          "This item is already in your cart. Go to your cart to change the amount",
        status: "error",
        isClosable: true,
      });
    } else {
      dispatch(addCartItem(id, 1));
      toast({
        description: "Item has been added.",
        status: "success",
        isClosable: true,
      });
    }
  };
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
        {product.productIsNew && (
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
          {product.productIsNew && (
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
              <Box
                fontSize="15px"
                mt={2}
                fontWeight="semibold"
                lineHeight="tight"
              >
                {product.name}
              </Box>
            </Link>
          </Flex>
        </Box>
        <Flex justifyContent="space-between" alignContent="center" py="6">
          <Rating
            rating={product.rating}
            numReviews={product.numberOfReviews}
          />
        </Flex>
        <Flex justify="space-between">
          <Box
            mt={-50}
            fontSize="18px"
            color={useColorModeValue("gray.800", "white")}
          >
            <Box as="span" color={"gray.600"} fontSize="18px">
              $
            </Box>
            {productPrice}
          </Box>
          <Tooltip
            label="Add to card"
            bg="white"
            placement="top"
            color="gray.800"
            fontSize="12px"
          >
            <Button
              mt={-14}
              variant="ghost"
              display="flex"
              disabled={product.stock <= 0}
              onClick={() => addItem(product._id)}
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
