import React from 'react'
import { MdOutlineDateRange, HiOutlineLanguage, FaRegStar, BiCameraMovie, FilmDescription} from "../index"

export default function FilmDetails({film}:any) {
    return (
        <div className='py-40 flex gap-4'>
            <FilmDescription film={film} />
            <div className='w-[352px] h-[470px] p-[50px] bg-[#1A1A1A] rounded-xl'>
                <div className='flex flex-col gap-6'>
                    <div className='h-[71px] flex flex-col gap-2'>
                        <div className="flex items-center gap-1 text-[#999999]">
                            <MdOutlineDateRange />
                            <span>Released Year</span>
                        </div>
                        <p className='text-white text-[18px]'>{film.release_date}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-1 text-[#999999]'>
                            <HiOutlineLanguage />
                            <span>Available Languages</span>
                        </div>
                        <div className='w-[200px]'>
                            {film.production_countries?.map((lang) => {
                                return (
                                    <button className='w-[55px] h-[30px] text-white bg-[#141414] cursor-pointer'>
                                        {lang.iso_3166_1}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-1 text-[#999999]'>
                            <FaRegStar />
                            <span>Ratings</span>
                        </div>
                        <div className='flex justify-between gap-2 text-white'>
                            <div className='w-[112px] h-[56px] p-[6px] bg-[#141414] rounded-md'>
                                Vote Average
                                <p>{film.vote_average}</p>
                            </div>
                            <div className='w-[112px] h-[56px] p-[6px] bg-[#141414] rounded-md'>
                                Vote Count
                                <p>{film.vote_count}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-1 text-[#999999]'>
                            <BiCameraMovie />
                            <p>Genres</p>
                        </div>
                        <div className="flex gap-2">
                            {film.genres?.map((genre) => {
                                return (
                                    <div className='w-[80px] h-[40px] p-2 bg-[#141414] text-white rounded-md'>
                                        {genre.name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
