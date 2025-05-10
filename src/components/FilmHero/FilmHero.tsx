import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

export default function FilmHero({film, videoKey}:any) {
    return (
        <div className='pt-[120px] relative'>
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
    )
}
