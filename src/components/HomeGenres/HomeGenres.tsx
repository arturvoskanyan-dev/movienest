import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks"
import { getGenres } from "../../features/genres/genresThunk";
import GenresItem from "../GenresItem/GenresItem";
import { FaArrowRight, FaArrowLeft } from "../index"
import { action, adventure, drama, comedy } from "../index"

export default function HomeGenres() {
    const { language } = useAppSelector((state) => state.global);
    const { genres } = useAppSelector((state) => state.genres);
    const [nextPortion, setNextPortion] = useState<number>(4);
    const [leftPortion, setLeftPortion] = useState<number>(0);
    const dispatch = useAppDispatch();

    const right = () => {
        if (genres.length > nextPortion) {
            setLeftPortion(leftPortion + 4)
            setNextPortion(nextPortion + 4)
        }
    }

    const left = () => {
        if (leftPortion > 0) {
            setLeftPortion(leftPortion - 4)
            setNextPortion(nextPortion - 4)
        }
    }

    useEffect(() => {
        dispatch(getGenres(language))
    }, [language])

    const genresLength = Math.ceil(genres.length / 4);
    let genresLengthArr = [];

    for (let i = 0; i < genresLength; i++) {
        genresLengthArr.push(
            <div
                key={i}
                className="w-[20px] h-[4px] bg-[#333333] rounded-md cursor-pointer"
                onClick={() => { setLeftPortion(4 * i); setNextPortion(4 * i + 4) }}
            ></div>
        )
    }

    const updatedElements = genresLengthArr.map((el, i) =>
        leftPortion / 4 === i
            ? React.cloneElement(el, {
                className: el.props.className + " w-[25px] bg-red-500",
            })
            : el
    );

    const images = [action, adventure, drama, comedy];
    const newGenresPushImage = genres.map((elem, i) => {
        return {
            ...elem,
            images: images[i]
        }
    })
    const newGenresSlice = newGenresPushImage.slice(leftPortion, nextPortion);


    return (
        <section className="max-w-[1440px] mx-auto py-40 px-12 flex flex-col gap-12">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl text-white">Explore our wide variety of Genres</h2>
                    <p className="text-[#999999] leading-8">Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                </div>
                <div className="flex items-center justify-end gap-2 bg-black p-3 border-1 border-[#333333] rounded-xl [&>span]:text-white [&>span]:rounded-md [&>span]:cursor-pointer">
                    <span className="p-[14px] bg-[#1A1A1A]" onClick={left}>
                        <FaArrowLeft />
                    </span>
                    <div className="flex gap-2">
                        {updatedElements}
                    </div>
                    <span className="p-[14px] bg-[#1A1A1A]" onClick={right}>
                        <FaArrowRight />
                    </span>
                </div>
            </div>
            <div className="flex justify-between flex-wrap">
                {newGenresSlice?.map((genre) => <GenresItem key={genre.id} genre={genre} />)}
            </div>
        </section>
    )
}
