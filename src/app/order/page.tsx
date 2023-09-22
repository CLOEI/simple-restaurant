'use client'
import { useRestaurantContext } from '@/utils/RestaurantContext';
import React, { useRef, useState } from 'react'

function Page() {
  const { state, addOrder } = useRestaurantContext();
  const [currentTable, setCurrentTable] = useState<null|1|2|3>();
  // We want to do it fast, so i use useRef instead of using form element
  const nameRef = useRef<HTMLSelectElement>(null)
  const quantityRef = useRef<HTMLSelectElement>(null)

  const add = () => {
    const name = nameRef.current?.value;
    const quantity = quantityRef.current?.value;
    if (!name || !quantity || !currentTable) return;

    const newOrder: Pesanan = {
      nama: name,
      kuantitas: parseInt(quantity),
      meja: currentTable
    }
    addOrder(newOrder)
  }


  return (
    <div className='p-4 rounded-md bg-slate-100 min-h-[300px]'>
      <div className='grid grid-cols-3 rounded-md overflow-hidden'>
        <div className={`h-[60px] flex items-center justify-center cursor-pointer ${currentTable === 1 ? "bg-black text-white" : 'bg-white text-black'}`} onClick={() => setCurrentTable(1)}>Meja 1</div>
        <div className={`h-[60px] flex items-center justify-center cursor-pointer ${currentTable === 2 ? "bg-black text-white" : 'bg-white text-black'}`} onClick={() => setCurrentTable(2)}>Meja 2</div>
        <div className={`h-[60px] flex items-center justify-center cursor-pointer ${currentTable === 3 ? "bg-black text-white" : 'bg-white text-black'}`} onClick={() => setCurrentTable(3)}>Meja 3</div>
      </div>
      <div className='flex space-x-2 mt-4'>
        <div className='flex-1 space-y-1'>
          <p>Menu</p>
          <select placeholder='Pilih menu' className='w-full py-2 rounded-md' ref={nameRef}>
            {state.menu.map((item) => (
              <option key={item.id} >{item.name}</option>
            ))}
          </select>
        </div>
        <div className='space-y-1'>
          <p>Jumlah</p>
          <select placeholder='Kuantitas' className='w-full py-2 rounded-md' ref={quantityRef}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
      <button className={`${currentTable == null ? "bg-gray-500 cursor-not-allowed" : "bg-black cursor-pointer"} w-max ml-auto block px-4 py-2 rounded-md text-white mt-4`} onClick={add}>Tambah</button>
    </div>
  )
}

export default Page