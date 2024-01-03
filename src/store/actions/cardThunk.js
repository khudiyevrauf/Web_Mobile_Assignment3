import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createCard,
  fetchCards,
  removeCard,
  updateCard,
  updateStatusOfCard,
} from "../../db/cards";

export const addCard = createAsyncThunk(
  "card/addCard",
  async (
    { text, question, answer, description, dateTime, status },
    thunkAPI
  ) => {
    try {
      const data = await createCard({
        text,
        question,
        answer,
        description,
        dateTime,
        status,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error has occured.");
    }
  }
);

export const getCards = createAsyncThunk(
  "card/getCards",
  async ({ sort }, thunkAPI) => {
    try {
      const data = await fetchCards({ sort });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error has occured.");
    }
  }
);

export const editCard = createAsyncThunk(
  "card/editCard",
  async ({ id, text, question, answer, description, dateTime }, thunkAPI) => {
    try {
      const data = await updateCard({
        id,
        text,
        question,
        answer,
        description,
        dateTime,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error has occured.");
    }
  }
);

export const updateStatus = createAsyncThunk(
  "card/updateStatus",
  async ({ id, status }, thunkAPI) => {
    try {
      const data = await updateStatusOfCard({
        id,
        status,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error has occured.");
    }
  }
);

export const deleteCard = createAsyncThunk(
  "card/deleteCard",
  async ({ id }, thunkAPI) => {
    try {
      const data = await removeCard({
        id,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error has occured.");
    }
  }
);
