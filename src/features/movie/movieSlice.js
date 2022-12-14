import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommended: [],
  new: [],
  original: [],
  trending: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommended = action.payload.recommend;
      state.new = action.payload.new;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommended = state => state.movie.recommended;
export const selectNew = state => state.movie.new;
export const selectOriginal = state => state.movie.original;
export const selectTrending = state => state.movie.trending;

export default movieSlice.reducer;