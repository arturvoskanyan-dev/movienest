import { useEffect, useState } from "react"
import { CiSearch, PiUserCircle } from "../index"
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks/hooks";
import { changeLanguage } from "../../features/global/globalSlice";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const changeLanguageState = (e:React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <header className={`fixed left-0 top-0 right-0 w-full z-50 duration-300 ${scrolled && "backdrop-blur-md"}`}>
            <section className='flex items-center justify-between max-w-[1440px] h-[120px] mx-auto px-12'>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <img src="/logo.png" alt="logo" />
                    <h2 className='text-[24px] text-white font-mono'>MovieNest</h2>
                </div>
                <ul className='bg-[#0F0F0F] border-3 border-[#1F1F1F] text-white w-[555px] h-[75px] flex items-center justify-center gap-8 rounded-md [&>li]:text-md [&>li]:cursor-pointer'>
                    <NavLink to="/" className='py-[14px] px-[24px] bg-[#1A1A1A] rounded-md'>Home</NavLink>
                    <li>Movies & Shows</li>
                    <li>Support</li>
                    <li>Subscriptions</li>
                </ul>
                <div className="flex items-center gap-2 [&>svg]:cursor-pointer">
                    <CiSearch className='text-[34px] text-white' />
                    <PiUserCircle className='text-[34px] text-white' />
                    <select className="bg-[#1A1A1A] text-white px-4 py-2 rounded-2xl" onChange={changeLanguageState}>
                        <option value="en-US">English</option>
                        <option value="ru-RU">Russian</option>
                    </select>
                </div>
            </section>
        </header>
    )
}
