'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const urls = [
  { name: 'Menu', path: '/menu' },
  { name: 'Order', path: '/order' },
  { name: 'Dapur', path: '/dapur' },
  { name: 'Kasir', path: '/kasir' },
]

function Navigation() {
  const pathname = usePathname();

  return (
    <div className='flex p-2 bg-slate-100 justify-center rounded-md'>
      {urls.map((url) => (
        <Link key={url.path} href={url.path}>
          <button
          key={url.path}
          className={`px-4 py-2 rounded-md ${pathname === url.path ? 'bg-white' : ''}`}
          >
            {url.name}
          </button>
        </Link>
      ))}
    </div>
  )
}

export default Navigation