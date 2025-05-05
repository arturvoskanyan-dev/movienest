import { configureStore } from "@reduxjs/toolkit";
import genresSlice from "../features/genres/genresSlice";
import filmsSlice from "../features/films/filmsSlice";
import globalSlice from "../features/global/globalSlice";

const store = configureStore({
    reducer: {
        genres: genresSlice,
        film: filmsSlice,
        global: globalSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;