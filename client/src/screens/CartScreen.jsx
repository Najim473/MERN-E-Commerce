import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Spinner,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  Wrap,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
const CartScreen = () => {
  const cartInfo = useSelector((state) => state.cart);
  const { loading, error, cart } = cartInfo;
  const getHeadingContent = () =>
    cart.length === 1 ? "(1 Item)" : `${cart.length} Items`;
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
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>We are sorry</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : cart.length <= 0 ? (
        <Alert status="Warning">
          <AlertIcon />
          <AlertTitle>Your cart is empty.</AlertTitle>
          <AlertDescription>
            <Link as={ReactLink} to="/products">
              Click here to see your products
            </Link>
          </AlertDescription>
        </Alert>
      ) : (
        <Box
          maxW={{ base: "3xl", lg: "7xl" }}
          mx="auto"
          px={{ base: "4", md: "8", lg: "12" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            align={{ lg: "flex-start" }}
            spacing={{ base: "8", md: "16" }}
          >
            <Stack spacing={{ base: "8", md: "10" }} flex="2">
              <Heading fontSize="2xl" fontWeight="extrabold">
                Shopping Cart {getHeadingContent}
              </Heading>
              {/* CartItem  */}
              <Stack spacing="6">
                {cart.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </Stack>
            </Stack>
            <Flex direction="column" align="center" flex="1">
              {/* CartOrderSummary  */}
              <HStack mt="6" fontWeight="semibold">
                <p>or</p>
                <Link
                  as={ReactLink}
                  to="/products"
                  color={mode("orange.500", "orange.200")}
                >
                  Continue Shopping
                </Link>
              </HStack>
            </Flex>
          </Stack>
        </Box>
      )}
    </Wrap>
  );
};

export default CartScreen;
