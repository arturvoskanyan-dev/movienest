import { useEffect, useState } from "react"
import { CiSearch, PiUserCircle, HiMenuAlt3 } from "../index"
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
            <section className='flex items-center justify-between max-w-[1440px] h-[120px] mx-auto px-12 max-[880px]:px-6'>
                <div className='flex items-center gap-1 cursor-pointer max-[1440px]:w-[165px]'>
                    <img src="/logo.png" alt="logo" className="max-[1440px]:w-[50px] max-[390px]:w-[35px]" />
                    <h2 className='text-2xl text-white font-mono max-[1440px]:text-xl'>MovieNest</h2>
                </div>
                <ul className='bg-[#0F0F0F] border-3 border-[#1F1F1F] text-white w-[555px] h-[75px] flex items-center justify-center gap-8 rounded-md [&>li]:text-md [&>li]:cursor-pointer max-[1440px]:w-[412px] max-[1440px]:h-[61px] max-[1440px]:gap-6 max-[1440px]:text-[14px] max-[798px]:hidden'>
                    <NavLink to="/" className='py-[14px] px-[24px] bg-[#1A1A1A] rounded-md max-[1440px]:px-[20px] max-[1440px]:py-[12px]'>Home</NavLink>
                    <li>Movies & Shows</li>
                    <li>Support</li>
                    <li>Subscriptions</li>
                </ul>
                <div className="flex items-center gap-2 [&>svg]:cursor-pointer max-[798px]:hidden">
                    <CiSearch className='text-[34px] text-white max-[1440px]:text-[24px]' />
                    <PiUserCircle className='text-[34px] text-white max-[1440px]:text-[24px]' />
                    <select className="bg-[#1A1A1A] text-white px-4 py-2 rounded-2xl max-[1440px]:px-1 max-[1440px]:py-1" onChange={changeLanguageState}>
                        <option value="en-US">English</option>
                        <option value="ru-RU">Russian</option>
                    </select>
                </div>
                <div className="w-[48px] h-[48px] bg-[#1A1A1A] p-[12px] border-2 border-[#262626] rounded-md min-[798px]:hidden">
                    <HiMenuAlt3 className="text-white text-[24px]" />
                </div>
            </section>
        </header>
    )
}
