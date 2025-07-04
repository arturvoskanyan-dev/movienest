import { NavLink } from "react-router-dom";
import { GenresType } from "../../types/types";
import {action, adventure, drama, comedy, FaArrowRight} from "../index"

export default function GenresItem({genre}: {genre: GenresType}) {
    const images = [adventure, action, comedy, drama];
    
    return (
        <NavLink to={`/category/${genre.id}/1`} className="bg-[#1A1A1A] w-[295px] h-[342px] p-[30px] flex flex-wrap gap-1 rounded-xl cursor-pointer">
            <img src={genre.images || images[Math.round(Math.random() * 3)]} />
            <div className="flex justify-between items-center w-full">
                <h3 className="text-white text-xl">{genre.name}</h3>
                <FaArrowRight className="text-white text-2xl" />
            </div>
        </NavLink>
    )
}
