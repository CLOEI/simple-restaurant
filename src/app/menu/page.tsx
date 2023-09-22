'use client'
import { useRestaurantContext } from '@/utils/RestaurantContext'
import { useEffect, useRef, useState } from 'react'

type Menu = {
  id: number,
  name: string
}

function Page() {
  const { state, removeMenu, addMenu } = useRestaurantContext();
  const [isLoaded, setisLoaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setisLoaded(true)
  }, [])

  const add = () => {
    const name = inputRef.current?.value;
    if (!name) return;

    const highestNumber = state.menu.map((item: Menu) => item.id).sort((a: number, b: number) => b - a)[0]

    const newMenu = {
      id: highestNumber + 1,
      name: name
    }
    addMenu(newMenu)
  }

  return (
    <div className='p-4 rounded-md bg-slate-100 min-h-[300px]'>
      <p>Menu Makanan</p>
      <div className='py-2 flex space-x-2'>
        <input ref={inputRef} type='text' placeholder='Tambahkan disini...' className='bg-white p-2 rounded-md flex-1'/>
        <button className='bg-gray-500 w-max px-6 py-2 rounded-md text-white' onClick={() => add()}>Tambah</button>
      </div>
      <table className='w-full mt-4 caption-bottom'>
        <thead className='text-slate-400'>
          <tr>
            <th className='h-12'>ID</th>
            <th className='h-12'>Menu</th>
            <th className='h-12'>Hapus?</th>
          </tr>
        </thead>
        <tbody>
          {isLoaded && state.menu.map((item: Menu) => (
            <tr key={item.id} className='border-transparent border-t-slate-200 border-2'>
              <td className='p-4 text-center'>{item.id}</td>
              <td className='p-4'>{item.name}</td>
              <td className='p-4'><button onClick={() => removeMenu(item)}><TrashIcon/></button></td>
            </tr>
          ))}
        </tbody>
        <caption className='mt-4 text-slate-400'>Daftar menu restoran Anda</caption>
      </table>
    </div>
  )
}

function TrashIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-300 hover:text-red-500 cursor-pointer mx-auto"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
  )
}

export default Page