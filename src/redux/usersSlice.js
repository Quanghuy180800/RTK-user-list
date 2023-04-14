import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: []
  },
  reducers: {
    // action
    setUserList: (state, action) => {
      state.list = action.payload;
    },

    setUserDetail: (state, action) => {
      state.list = action.payload;
    }
  }
});

export const { setUserList, setUserDetail } = userSlice.actions;

export const getAllUsers = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      dispatch(setUserList(response.data));
    })
    .catch((error) => console.log(error));
};

export const getUserDetail = (idx) => (dispatch) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${idx}`)
    .then((response) => {
      dispatch(setUserDetail(response.data));
    })
    .catch((error) => console.log(error));
};

export default userSlice.reducer;
