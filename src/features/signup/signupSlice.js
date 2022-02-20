import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message/messageSlice";
import AuthService from "../../services/auth.service";


export const register = createAsyncThunk(
  "user/signup",
  async ({ fullname,email, password,mobile_no }, thunkAPI) => {
    const data = await AuthService.register(fullname,email, password,mobile_no).then(response => {
      console.log(response.data);
      return{data: response};
    }).catch(err => {
      return{data: err};
    })
  }
);


const initialState =  {
  isLoggedIn:false,
  response : null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.response = action.payload.data;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.response = null;
    },
  },
});
const { reducer } = authSlice;
export default reducer;

