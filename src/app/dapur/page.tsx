'use client'

import { useRestaurantContext } from '@/utils/RestaurantContext';
import React from 'react'

function Page() {
  const { state } = useRestaurantContext();

  return (
    <div className='p-4 rounded-md bg-slate-100 min-h-[300px]'>
      <div className='grid grid-cols-3'>
        <div>
          <h2 className='font-semibold text-xl'>Meja 1</h2>
          {state.pesanan.filter((item) => item.meja === 1).map((item) => (
            <p key={item.nama} className='font-extralight text-sm'>{item.kuantitas}x {item.nama}</p>
          ))}
        </div>
        <div>
          <h2 className='font-semibold text-xl'>Meja 2</h2>
          {state.pesanan.filter((item) => item.meja === 2).map((item) => (
            <p key={item.nama} className='font-extralight text-sm'>{item.kuantitas}x {item.nama}</p>
          ))}
        </div>
        <div>
          <h2 className='font-semibold text-xl'>Meja 3</h2>
          {state.pesanan.filter((item) => item.meja === 3).map((item) => (
            <p key={item.nama} className='font-extralight text-sm'>{item.kuantitas}x {item.nama}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page