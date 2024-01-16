import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Pageination = () => {
    const {page, handlePageChange, totalPages} = useContext(AppContext);
  return (
    <div className='w-full shadow-[0_-2px_0_0_rgba(5,8,5,0.1)] shadow-slate-500 bg-slate-200 fixed bottom-0 py-2 backdrop-blur opacity-[98%]'> 
        <div className='flex justify-between w-1/2 mx-auto py-1'>
            <div className='flex gap-2'>
                {
                    page > 1 &&
                    <button 
                        onClick={() => handlePageChange(page-1)}
                        className='border-1 px-2 bg-slate-50 rounded-lg border-gray-300'>Previous</button>
                }
                {
                    page < totalPages &&
                    <button 
                        onClick={() => handlePageChange(page+1)}
                        className='border-1 px-2 bg-slate-50 rounded-lg border-gray-300'>Next</button>
                }
            </div>
            <div>
                <p>Page {page} of {totalPages} </p>
            </div>
        </div>
    </div>
  )
}
