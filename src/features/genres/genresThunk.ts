import { createAsyncThunk } from "@reduxjs/toolkit";
import { GenresType } from "../../types/types";
import API from "../../api/api";

export const getGenres = createAsyncThunk<Array<GenresType>>(
    "get/genres",
    async() => {
        const response = await API.getGenres();

        return response.data.genres
    }
)