import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message/messageSlice";

export const BookService = createAsyncThunk(
  "/bookable",
  async ({ service }, thunkAPI) => {
    try {
        console.log("service from redux",service);
      return service ;
    } catch (error) {
      thunkAPI.dispatch(setMessage("Something Went Wrong"));
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState =  {
  bookableservice : null
}

const bookServiceSlice = createSlice({
  name: "bookableservice",
  initialState,
  extraReducers: {
    [BookService.fulfilled]: (state, action) => {
      state.bookableservice = action.payload.data;
    },
    [BookService.rejected]: (state, action) => {
      state.bookableservice = null;
    },
  },
});

const { reducer } = bookServiceSlice;
export default reducer;

