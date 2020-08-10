import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const RegExpEmail = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  "i"
);

const signUpSlice = createSlice({
  name: "signUpForm",
  initialState: {
    value: {
      username: "",
      dob: "",
      email: "",
      password: "",
      terms: "",
    },
    valid: {
      username: "",
      dob: "",
      email: "",
      password: "",
      terms: "",
    },
  },
  reducers: {
    changeValue: (state, { payload }) => {
      const { name, value } = payload;
      state.value[name] = value;
    },
    validateField: (state, { payload }) => {
      const { name } = payload;
      switch (name) {
        case "username": {
          state.value.username = state.value.username.length < 5
            ? "Please enter a valid username"
            : "";
          break;
        }
        case "password": {
          state.valid.password =
          state.value.password.length < 5
            ? "Please enter a valid password"
            : "";
          break;
        }
        case "dob": {
          state.valid.dob = dayjs(state.value.dob).isValid()
          ? ""
          : "Please enter a valid date";
          break;
        }
        case "email": {
          state.valid.email = !RegExpEmail.test(state.value.email)
          ? "Please enter a valid email"
          : "";
          break;
        }
      }
    },
  },
  extraReducers: {},
});

export const { changeValue, validateField } = signUpSlice.actions;

export default signUpSlice.reducer;
