import { createSlice } from "@reduxjs/toolkit";
import {
  addCard,
  deleteCard,
  getCards,
  editCard,
  updateStatus,
} from "../actions/cardThunk";

const initialState = {
  cards: [],
  status: "nothing",
  error: "",
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCard.fulfilled, (state) => {
        state.status = "fulfilled";
      })
      .addCase(addCard.rejected, (state, { payload }) => {
        state.status = "error";
        state.cards = [];
        state.error = payload;
      })
      .addCase(getCards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCards.fulfilled, (state, { payload }) => {
        state.cards = payload;
        state.status = "fulfilled";
      })
      .addCase(getCards.rejected, (state, { payload }) => {
        state.status = "error";
        state.cards = [];
        state.error = payload;
      })
      .addCase(editCard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editCard.fulfilled, (state) => {
        state.status = "fulfilled";
      })
      .addCase(editCard.rejected, (state, { payload }) => {
        state.status = "error";
        state.cards = [];
        state.error = payload;
      })
      .addCase(updateStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateStatus.fulfilled, (state) => {
        state.status = "fulfilled";
      })
      .addCase(updateStatus.rejected, (state, { payload }) => {
        state.status = "error";
        state.cards = [];
        state.error = payload;
      })
      .addCase(deleteCard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCard.fulfilled, (state, { payload }) => {
        state.cards = payload;
        state.status = "fulfilled";
      })
      .addCase(deleteCard.rejected, (state, { payload }) => {
        state.status = "error";
        state.cards = [];
        state.error = payload;
      });
  },
});

export default cardSlice.reducer;
