import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { NavLink, useParams } from 'react-router-dom';
import { getFilm, getFilmVideo } from '../../features/films/filmsThunk';
import { FaPlay } from "react-icons/fa6";

export default function FilmPage() {
    const {film, videoKey} = useAppSelector((state) => state.film);
    const {language} = useAppSelector((state) => state.global)
    const dispatch = useAppDispatch();
    let {id} = useParams();

    useEffect(() => {
        dispatch(getFilm({movie_id: +id!, language}))
        dispatch(getFilmVideo({movie_id: +id!, language}))
        // dispatch(getFilm(+id!, language))
        // dispatch(getFilmVideo(+id!, language))
    }, [id, language])
    
    return (
        <section className='max-w-[1440px] mx-auto'>
            <div className='pt-[120px] px-12 relative'>
                <img src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`} className='max-h-[835px] h-[80vh] w-full rounded-xl object-cover' />
                <div className="absolute bottom-0 text-center backdrop-blur-xl max-w-[1344px] w-full flex justify-center p-4">
                    <div className="max-w-[1096px] flex flex-col gap-4 items-center">
                        <h2 className="text-white text-[28px] font-bold">{film.title}</h2>
                        <p className="text-black">{film.overview}</p>
                        <NavLink 
                            to={`https://www.youtube.com/embed/${videoKey}`}
                            target='_blank'
                            className="bg-[#E50000] w-[251px] h-[54px] text-white text-xl rounded-md flex items-center justify-center gap-2 cursor-pointer duration-300 hover:bg-[#ff9999]">
                            <FaPlay />
                            Play Now
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='py-40'>

            </div>
        </section>
    )
}
