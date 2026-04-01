import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  UPDATE_QUANTITY
} from '../actionTypes';

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const existingItem = state.items.find(item => item.id === action.payload.product.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.product.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload.product, quantity: action.payload.quantity }]
        };
      }

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case INCREMENT_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case DECREMENT_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };

    case UPDATE_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    default:
      return state;
  }
};



export default cartReducer;

