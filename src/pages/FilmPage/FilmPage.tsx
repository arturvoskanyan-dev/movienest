import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { useParams } from 'react-router-dom';
import { getFilm, getFilmVideo } from '../../features/films/filmsThunk';
import {Trail, FilmHero, FilmDetails} from "../index.ts"

export default function FilmPage() {
    const { film, videoKey } = useAppSelector((state) => state.film);
    const { language } = useAppSelector((state) => state.global)
    const dispatch = useAppDispatch();
    let { id } = useParams();

    useEffect(() => {
        dispatch(getFilm({ movie_id: +id!, language }))
        dispatch(getFilmVideo({ movie_id: +id!, language }))
    }, [id, language])

    return (
        <section className='max-w-[1440px] mx-auto px-12'>
            <FilmHero film={film} videoKey={videoKey} />
            <FilmDetails film={film} />
            <Trail />
        </section>
    )
}
