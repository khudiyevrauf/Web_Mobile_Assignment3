import { createAsyncThunk } from "@reduxjs/toolkit";
import { createMessage } from "../../db/messages";

export const sendMessage = createAsyncThunk(
  "message/sendMessage",
  async ({ id, name, email, subject, text }, thunkAPI) => {
    try {
      const data = await createMessage({ id, name, email, subject, text });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error occured.");
    }
  }
);
