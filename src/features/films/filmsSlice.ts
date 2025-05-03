import { createSlice } from "@reduxjs/toolkit"
import { getFilm, getFilmVideo } from "./filmsThunk";
import { FilmSliceStateType, FilmsType } from "../../types/types";

const initialState: FilmSliceStateType = {
    film: {} as FilmsType,
    videoKey: ""
}

const filmsSlice = createSlice({
    name: "filmsSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getFilm.fulfilled, (state, action) => {
            state.film = action.payload
        })
        .addCase(getFilmVideo.fulfilled, (state, action) => {
            state.videoKey = action.payload;
        })
    }
})

export default filmsSlice.reducer;