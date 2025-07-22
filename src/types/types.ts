export type GenresType = {
    id : number,
    name : string,
    // images?: string[]
    images?: string
}

export interface FilmsType {
    adult : boolean,
    backdrop_path : string,
    genre_ids : number[],
    id : number,
    original_language : string,
    original_title : string
    overview : string,
    popularity : number,
    poster_path : string,
    release_date :  string,
    title : string,
    video : boolean,
    vote_average : number,
    vote_count : number
}

export interface FilmsSliceStateType {
    page : number,
    results : Array<FilmsType>
}

export type GetGenresReturnType = {
    genres : Array<GenresType>
}

export type GenresSliceStateType = {
    genres : Array<GenresType>,
    genresFilms: Array<FilmsType>
}

export type FilmSliceStateType = {
    film: FilmsType,
    videoKey: string
}

export type QuestionsType = {
    id: number,
    title: string,
    isOpen: boolean,
}