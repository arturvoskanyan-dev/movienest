import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks"
import { getGenres } from "../../features/genres/genresThunk";
import GenresItem from "../GenresItem/GenresItem";

export default function HomeGenres() {
    const { genres } = useAppSelector((state) => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    return (
        <section className="max-w-[1440px] mx-auto py-40 px-12 flex flex-col gap-12">
            <div className="">
                <h2 className="text-2xl text-white">Explore our wide variety of Genres</h2>
                <p className="text-[#999999] leading-8">Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
            </div>
            <div className="flex gap-3 flex-wrap">
                {genres?.map((genre) => <GenresItem key={genre.id} genre={genre} />)}
            </div>
        </section>
    )
}
