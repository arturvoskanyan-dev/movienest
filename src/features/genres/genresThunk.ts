import { createAsyncThunk } from "@reduxjs/toolkit";
import { GenresType } from "../../types/types";
import API from "../../api/api";

export const getGenres = createAsyncThunk<Array<GenresType>, string>(
    "get/genres",
    async(language) => {
        const response = await API.getGenres(language);

        return response.data.genres
    }
)

export const getGenresFilms = createAsyncThunk(
    "get/genres/films",
    async({genresId, language, page}: {genresId: number, language: string, page: number}) => {
        const response = await API.getGenresFilms(genresId, language, page);

        return response.data.results
    }
)