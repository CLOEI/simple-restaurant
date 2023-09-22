'use client'
import { useRestaurantContext } from '@/utils/RestaurantContext'
import React from 'react'

function Header() {
  const { resetMenu } = useRestaurantContext()

  return (
    <div className="pb-2 flex justify-between items-center">
      <h1 className='text-3xl font-semibold'>Sistem Restoran</h1>
      <button className='px-4 py-2 border-slate-100 border-solid border-2 rounded-sm hover:bg-slate-100' onClick={resetMenu}><ResetIcon/></button>
    </div>
  )
}

function ResetIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="mr-2"
      viewBox="0 0 24 24"
    >
      <path d="M21 12a9 9 0 00-9-9 9.75 9.75 0 00-6.74 2.74L3 8"></path>
      <path d="M3 3v5h5M3 12a9 9 0 009 9 9.75 9.75 0 006.74-2.74L21 16"></path>
      <path d="M16 16h5v5"></path>
    </svg>
  );
}

export default Header