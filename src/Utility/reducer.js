import { Type } from "./action.type";
export const initialState = {
  basket: [],
  user: null,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      const existingItemIndex = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );

      if (existingItemIndex !== -1) {
        // Item already exists → increase amount
        const updatedBasket = [...state.basket];
        updatedBasket[existingItemIndex].amount += 1;
        return {
          ...state,
          basket: updatedBasket,
        };
      } else {
        // New item → add with amount: 1
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      }
    }

    case Type.REMOVE_FROM_BASKET: {
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index].amount -= 1;
        } else {
          newBasket = newBasket.filter((_, i) => i !== index);
        }
      }
      return {
        ...state,
        basket: newBasket,
      };
    }
    case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case Type.EMPTY_BASKET:
      return {
        ...state,
        basket: [], // Clear the basket
      };
    default:
      return state;
  }
};
