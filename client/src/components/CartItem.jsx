import {
  CloseButton,
  Flex,
  Select,
  useColorMode as mode,
  Stack,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { addCartItem } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
const CartItem = ({ CartItem }) => {
  const { name, image, price, stock, qty, id } = CartItem;
  const dispatch = useDispatch();

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          w="120px"
          h="120px"
          fit="cover"
          src={image}
          alt={name}
          draggable="flase"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium"></Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default CartItem;
