import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { GenresSliceStateType, GenresType } from "../../types/types";
import { getGenres } from "./genresThunk";

const initialState: GenresSliceStateType = {
    genres: []
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
    }
})

export default genresSlice.reducer;