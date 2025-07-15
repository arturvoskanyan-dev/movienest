import React from 'react'
import NavItem from './NavItem/NavItem';

export default function NavItems({ navItems }: { navItems: Array<string> }) {
    return (
        <ul className='bg-[#0F0F0F] border-3 border-[#1F1F1F] text-white w-[555px] h-[75px] flex items-center justify-center gap-8 rounded-md [&>li]:text-md [&>li]:cursor-pointer max-[1440px]:w-[412px] max-[1440px]:h-[61px] max-[1440px]:gap-6 max-[1440px]:text-[14px] max-[798px]:hidden'>
            {
                navItems.map((item, i) => <NavItem key={i} item={item} />)
            }
        </ul>
    )
}
