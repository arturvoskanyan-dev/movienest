import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks"
import { getGenres } from "../../features/genres/genresThunk";
import GenresItem from "../GenresItem/GenresItem";
import { FaArrowRight, FaArrowLeft } from "../index"
import { action, adventure, drama, comedy } from "../index"

export default function HomeGenres() {
    const { language } = useAppSelector((state) => state.global);
    const { genres } = useAppSelector((state) => state.genres);
    const [portionNum, setPortionNum] = useState<number>(() => window.innerWidth > 768 ? 4 : 2);
    const [nextPortion, setNextPortion] = useState<number>(portionNum);
    const [leftPortion, setLeftPortion] = useState<number>(0);
    const dispatch = useAppDispatch();

    const right = () => {
        if (genres.length > nextPortion) {
            setLeftPortion(leftPortion + portionNum)
            setNextPortion(nextPortion + portionNum)
        }
    }

    const left = () => {
        if (leftPortion > 0) {
            setLeftPortion(leftPortion - portionNum)
            setNextPortion(nextPortion - portionNum)
        }
    }

    useEffect(() => {
        dispatch(getGenres(language))
    }, [language])

    const genresLength = Math.ceil(genres.length / portionNum);
    let genresLengthArr = [];

    for (let i = 0; i < genresLength; i++) {
        genresLengthArr.push(
            <div
                key={i}
                className="w-[20px] h-[4px] bg-[#333333] rounded-md cursor-pointer"
                onClick={() => { setLeftPortion(portionNum * i); setNextPortion(portionNum * i + portionNum) }}
            ></div>
        )
    }

    const updatedElements = genresLengthArr.map((el, i) =>
        leftPortion / portionNum === i
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

    useEffect(() => {
        const handleResize = () => {
            const newPortion = window.innerWidth > 675 ? 4 : 2;
            setPortionNum(newPortion);
            setLeftPortion(0);
            setNextPortion(newPortion);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <section className="max-w-[1440px] mx-auto py-40 px-12 flex flex-col gap-12">
            <div className="flex justify-between items-center gap-4 max-[684px]:flex-wrap">
                <div>
                    <h2 className="text-4xl text-white max-[1440px]:text-3xl max-[768px]:text-2xl">Explore our wide variety of Genres</h2>
                    <p className="text-[#999999] text-lg leading-8 max-[1440px]:text-base max-[768px]:text-sm max-[768px]:leading-5">Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                </div>
                <div className="flex items-center justify-end gap-2 bg-black p-3 border-1 border-[#333333] rounded-xl [&>span]:text-white [&>span]:rounded-md [&>span]:cursor-pointer max-[420px]:border-0 max-[420px]:bg-transparent">
                    <span className="p-[14px] bg-[#1A1A1A] max-[420px]:hidden" onClick={left}>
                        <FaArrowLeft />
                    </span>
                    <div className="flex gap-2 max-[420px]:gap-0">
                        {updatedElements}
                    </div>
                    <span className="p-[14px] bg-[#1A1A1A] max-[420px]:hidden" onClick={right}>
                        <FaArrowRight />
                    </span>
                </div>
            </div>
            <div className="flex justify-between flex-wrap gap-6">
                {newGenresSlice?.map((genre) => <GenresItem key={genre.id} genre={genre} />)}
            </div>
        </section>
    )
}
