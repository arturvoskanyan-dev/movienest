import { NavLink } from "react-router-dom";

export default function GenresItem({genre}: {genre: {id: number, name: string}}) {
    return (
        <NavLink to={`/category/${genre.id}`} className="bg-[#1A1A1A] w-[200px] h-[100px] rounded-xl cursor-pointer">
            <h3 className="text-white text-xl">{genre.name}</h3>
        </NavLink>
    )
}
