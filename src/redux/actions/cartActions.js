import{
    ADD_ITEM,
    REMOVE_ITEM,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    UPDATE_QUANTITY
} from '../actionTypes';

export const addItem = (product, quantity) => ({
    type: ADD_ITEM,
    payload: { product, quantity }
});

export const removeItem = (productId) => ({
    type: REMOVE_ITEM,
    payload: productId
});

export const incrementQuantity = (productId) => ({
    type: INCREMENT_QUANTITY,
    payload: productId
});

export const decrementQuantity = (productId) => ({
    type: DECREMENT_QUANTITY,
    payload: productId
});

export const updateQuantity = (productId, quantity) => ({
    type: UPDATE_QUANTITY,
    payload: { productId, quantity }
});
