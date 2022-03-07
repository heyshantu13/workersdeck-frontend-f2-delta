import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message/messageSlice";

export const BookService = createAsyncThunk(
  "/bookable",
  async ({ service }, thunkAPI) => {
    try {
      return {
        service_id:service.id,
        service_charge: service.service_charge,
        service_name:service.service_name,
        service_description:service.service_description
      } ;
    } catch (error) {
      thunkAPI.dispatch(setMessage("Something Went Wrong"));
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState =  {
    service_id:null,
    service_charge: null,
    service_name:null,
    service_description:null,
    address_id:null,
    booking_time: null,
    booking_date: null,

}

const bookServiceSlice = createSlice({
  name: "bookableservice",
  initialState,
  extraReducers: {
    [BookService.fulfilled]: (state, action) => {
      state.bookableservice = action.payload;
    },
    [BookService.rejected]: (state, action) => {
      state.bookableservice = null;
    },
  },
});

const { reducer } = bookServiceSlice;
export default reducer;

