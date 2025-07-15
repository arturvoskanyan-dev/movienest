import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavItem({ item }: { item: string}) {
    return (
        <NavLink
            to={`/${item === "Home" ? "" : item.toLowerCase().replace(/[ &]/g, "")}`}>
            {({ isActive }) => (
                <li
                    className={`${isActive ? "py-[14px] px-[24px] bg-[#1A1A1A] rounded-md max-[1440px]:px-[20px] max-[1440px]:py-[12px] max-[798px]:text-white" : "text-gray-300 max-[798px]:text-xl"}`}>
                    {item}
                </li>
            )}
        </NavLink>
    )
}
