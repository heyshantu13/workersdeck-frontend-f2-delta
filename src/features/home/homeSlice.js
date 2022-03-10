import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message/messageSlice";
import WDServiceList from "../../services/list.service";

export const ServiceListNew = createAsyncThunk(
  "/services/list/",
  async ({ city, pincode,category_id }, thunkAPI) => {
    try {
      const data = await WDServiceList.fetchServiceList(city, pincode,category_id);
      return { data: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);



const initialState =  {
  data : null
}

const serviceSlice = createSlice({
  name: "fetchServiceList",
  initialState,
  extraReducers: {
    [ServiceListNew.fulfilled]: (state, action) => {
      state.data = action.payload.data.data;
    },
    [ServiceListNew.rejected]: (state, action) => {
      state.data = null;
    },
  },
});

const { reducer } = serviceSlice;
export default reducer;

