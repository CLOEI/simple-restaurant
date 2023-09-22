'use client'

import { useRestaurantContext } from "@/utils/RestaurantContext";
import { useState } from "react";

function Page() {
  const { state, clearOrders } = useRestaurantContext();
  const [ selectedTable, setSelectedTable ] = useState<number>(0);

  return (
    <div className='p-4 rounded-md bg-slate-100 min-h-[300px]'>
      <p>Meja</p>
      <div className='py-2 space-y-2'>
        <select className='w-full p-2 rounded-md' onChange={(e) => setSelectedTable(parseInt(e.target.value))}>
          <option value="0">Nomor meja</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <div className='space-x-2 w-max ml-auto'>
          <button className='bg-rose-500 text-white w-max px-6 py-2 rounded-md' onClick={() => clearOrders(selectedTable)}>Kosongkan Meja</button>
        </div>
      </div>
      <table className='w-full mt-4 caption-bottom'>
        <thead className='text-slate-400'>
          <tr>
            <th className='h-12'>Jumlah</th>
            <th className='h-12'>Menu</th>
            <th className='h-12'>Harga</th>
          </tr>
        </thead>
        <tbody>
          {state.pesanan.filter((item) => item.meja === selectedTable).map((item) => (
            <tr key={item.nama} className='border-transparent border-t-slate-200 border-2'>
              <td className='p-4 text-center'>{item.kuantitas}</td>
              <td className='p-4'>{item.nama}</td>
              <td className='p-4 text-center'>Gratis</td>
            </tr>
          ))}
        </tbody>
        <caption className='mt-4 text-slate-400'>Terimakasih sudah makan di <span className='font-semibold'>Restoran</span></caption>
      </table>
    </div>
  )
}

export default Page