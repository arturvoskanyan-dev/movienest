import axios from "axios";
import { GetGenresReturnType } from "../types/types";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;;

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

const API = {
    getGenres() {
        return instance.get<GetGenresReturnType>(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    }
}

export default API;