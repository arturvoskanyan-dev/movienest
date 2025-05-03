import axios from "axios";
import { GetGenresReturnType } from "../types/types";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;;

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

const API = {
    getGenres() {
        return instance.get<GetGenresReturnType>(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
    },

    getGenresFilms(genresId:number) {
        return instance.get(`/discover/movie?api_key=${API_KEY}&with_genres=${genresId}`)
    }
}

export default API;