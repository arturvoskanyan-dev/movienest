import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "../features/genres/genresSlice";
import filmsSlice from "../features/films/filmsSlice";

const store = configureStore({
    reducer: {
        genres: genresSlice,
        film: filmsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;