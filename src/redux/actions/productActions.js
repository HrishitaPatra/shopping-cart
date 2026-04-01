import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from '../actionTypes';
import { mockApi } from '../../api/mockApi';

export const fetchProducts = () => {
    return async(dispatch) => {
        dispatch({ type: FETCH_PRODUCTS_REQUEST });
        try{
            const products = await mockApi.getProducts();
            dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });

        }
        catch(error){
            dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
        }
    }
}

