import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

export const getFilm = createAsyncThunk(
    "get/films",
    async(movie_id:number) => {
        const response = await API.getFilm(movie_id);

        return response.data
    }
)

export const getFilmVideo = createAsyncThunk(
    "get/film/video",
    async(movie_id:number) => {
        const response = await API.getFilmVideo(movie_id);

        return response.data.results[0].key
    }
)