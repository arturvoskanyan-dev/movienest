import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { GenresSliceStateType, GenresType } from "../../types/types";
import { getGenres, getGenresFilms } from "./genresThunk";

const initialState: GenresSliceStateType = {
    genres: [],
    genresFilms: []
}

const genresSlice = createSlice({
    name: "genresSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getGenres.fulfilled, (state, action: PayloadAction<Array<GenresType>>) => {
            state.genres = action.payload;
        })
        .addCase(getGenresFilms.fulfilled, (state, action) => {
            state.genresFilms = action.payload;
        })
    }
})

export default genresSlice.reducer;