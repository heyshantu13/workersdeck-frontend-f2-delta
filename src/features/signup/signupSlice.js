import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "../message/messageSlice";
import AuthService from "../../services/auth.service";


export const signup = createAsyncThunk(
  "user/signup",
  async ({ fullname,email, password,mobile_no }, thunkAPI) => {
    try {
      const data = await AuthService.register(fullname,email, password,mobile_no);
      return { user: data };
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
  isLoggedIn:false,
  user : null
}

const authSlice = createSlice({
  name: "register",
  initialState,
  extraReducers: {
    [signup.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = action.payload.user;
    },
    [signup.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [signup.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;

