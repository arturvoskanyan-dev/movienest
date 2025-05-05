import axios from "axios";
import { FilmsSliceStateType, FilmsType, GetGenresReturnType } from "../types/types";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

const API = {
    getGenres(language:string) {
        return instance.get<GetGenresReturnType>(`/genre/movie/list?api_key=${API_KEY}&language=${language}`)
    },

    getGenresFilms(genresId:number, language:string, page:number) {
        return instance.get<FilmsSliceStateType>(`/discover/movie?api_key=${API_KEY}&with_genres=${genresId}&language=${language}&page=${page}`)
    },

    getFilm(movie_id:number, language:string) {
        return instance.get<FilmsType>(`movie/${movie_id}?api_key=${API_KEY}&language=${language}`)
    },

    getFilmVideo(movie_id:number, language:string) {
        return instance.get(`/movie/${movie_id}/videos?api_key=${API_KEY}&language=${language}`)
    }
}

export default API;