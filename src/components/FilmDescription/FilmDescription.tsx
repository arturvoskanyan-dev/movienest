import React from 'react'

export default function FilmDescription({film}:any) {
    return (
        <div className='w-[992px] h-[195px] p-[50px] flex flex-col gap-2 bg-[#1A1A1A] text-[#999999] rounded-xl'>
            <h5>Decscription</h5>
            <p className='w-[857px] h-[54px] text-[18px] text-white'>
                {film.overview}
            </p>
        </div>
    )
}
