import React from 'react'
import NavItem from '../NavItems/NavItem/NavItem';

export default function MenuSection({ navItems }: { navItems: Array<string> }) {
  return (
    <section className='w-[200px] h-screen backdrop-blur-3xl fixed top-0 right-0 bottom-0 min-[798px]:hidden'>
      <ul className='pl-6 pt-40 [&>li]:text-gray-300'>
        {
          navItems.map((item, i) => <NavItem key={i} item={item} />)
        }
      </ul>
    </section>
  )
}
