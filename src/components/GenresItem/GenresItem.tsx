import { NavLink } from "react-router-dom";
import { GenresType } from "../../types/types";

export default function GenresItem({genre}: {genre: GenresType}) {
    return (
        <NavLink to={`/category/${genre.id}/1`} className="bg-[#1A1A1A] w-[200px] h-[100px] rounded-xl cursor-pointer">
            <h3 className="text-white text-xl">{genre.name}</h3>
        </NavLink>
    )
}
