import { NavLink } from "react-router-dom";

export default function FilmsItem({ film }: any) {
    return (
        <section className='p-[20px] bg-[#262626] rounded-md duration-300 hover:scale-125'>
            <NavLink to={`/film/${film.id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
                    className='w-[243px] h-[281px] object-contain cursor-pointer'
                />
            </NavLink>
            <div className='text-[#999999] text-[20px]'>
                <h3 className='max-w-[200px] truncate'>{film.title}</h3>
                <span>{film.release_date}</span>
            </div>
        </section>
    )
}
