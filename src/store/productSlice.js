import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
});

const initialState = {
  status: STATUS.IDLE,
  data: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    removeProduct: (state, action) => {
      const index = state.findIndex((product) => product.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    updateProduct: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    }
},
    // extraReducer: (builder) => {
    //     builder
    //     .addCase(fetchProducts.pending,(state, action) => {
    //         state.status = STATUS.LOADING;
    //     })
    //     .addCase(fetchProducts.fulfilled,(state, action) => {
    //         state.data = action.payload;
    //         state.status = STATUS.SUCCESS;
    //     })
    //     .addCase(fetchProducts.rejected,(state, action) => {
    //         state.status = STATUS.ERROR;
    //     })
    // }
});

export const { addProduct, setStatus, removeProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;

// Thunks triditional way
export const fetchProducts = () => {
  return async function fetchProductsThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(addProduct(data));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
      console.error(error);
    }
  };
};

//Thunks redux toolkit
// export const fetchProducts = createAsyncThunk('products/fetch', async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//       const data = await response.json();
//       return data;
// });

