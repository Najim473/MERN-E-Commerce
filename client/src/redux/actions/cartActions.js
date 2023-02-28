import axios from "axios";
import { setLoading, setError, cartItemAdd } from "../slices/cart";

export const addCartItem = (id, qty) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const { data } = await axios.get(`/api/products/${id}`);
        const itemToAdd = {
            id: data_id,
            name: data_name,
            image: data_image,
            price: data_price,
            stock: data_stock,
            qty,
        };
        dispatch(cartItemAdd(itemToAdd))
    } catch {
        dispatch(
            setError(
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                        ? error.message
                        : "An Unexpected error has occured. Please try again later"
            )
        );
    }
};
