import { useEffect, useState } from "react"
import { useAppDispatch } from "../../store/hooks/hooks";
import { changeLanguage } from "../../features/global/globalSlice";
import { CiSearch, PiUserCircle, HiMenuAlt3, MdClose, NavItems, MenuSection } from "../index"

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const navItems = ["Home", "Movies & Shows", "Support", "Subscriptions"];
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const changeLanguageState = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <header className={`fixed left-0 top-0 right-0 w-full z-50 duration-300 ${scrolled && "backdrop-blur-md"}`}>
            <section className='flex items-center justify-between max-w-[1440px] h-[120px] mx-auto px-12 max-[880px]:px-6'>
                <div className='flex items-center gap-1 cursor-pointer max-[1440px]:w-[165px]'>
                    <img src="/logo.png" alt="logo" className="max-[1440px]:w-[50px] max-[390px]:w-[35px]" />
                    <h2 className='text-2xl text-white font-mono max-[1440px]:text-xl'>MovieNest</h2>
                </div>
                <NavItems navItems={navItems} />
                <div className="flex items-center gap-2 [&>svg]:cursor-pointer max-[798px]:hidden">
                    <CiSearch className='text-[34px] text-white max-[1440px]:text-[24px]' />
                    <PiUserCircle className='text-[34px] text-white max-[1440px]:text-[24px]' />
                    <select className="bg-[#1A1A1A] text-white px-4 py-2 rounded-2xl max-[1440px]:px-1 max-[1440px]:py-1" onChange={changeLanguageState}>
                        <option value="en-US">English</option>
                        <option value="ru-RU">Russian</option>
                    </select>
                </div>
                <div className={`w-[48px] h-[48px] bg-[#1A1A1A] p-[10px] border-2 border-[#262626] rounded-md ${isMenu && "absolute right-6 z-50"} min-[798px]:hidden`}>
                    {
                        !isMenu 
                        ? <HiMenuAlt3 className="text-white text-[24px]" onClick={() => setIsMenu(true)} />
                        : <MdClose className="text-white text-2xl" onClick={() => setIsMenu(false)} />
                    }
                </div>
                {isMenu && <MenuSection navItems={navItems} />}
            </section>
        </header>
    )
}
