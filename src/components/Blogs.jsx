import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import { Card } from './Card';

export const Blogs = () => {
    //consume
    const {loading, posts} = useContext(AppContext);
    console.log(posts);
  return (
    <div className=' w-full mt-20' >  
        <div className='w-1/2 mx-auto flex justify-center items-center h-full gap-2 my-2'>
            {
                loading ? (
                     <Spinner/>) : (
                        <div className='flex flex-col gap-2 mb-14' >
                            {
                                posts.length === 0 ? (
                                <div className='m-auto absolute top-[48%] text-red-700 text-[24px]'>
                                    No Post Available
                                </div>) : ( 
                                    posts.map((post) => (<Card post={post}/>))
                                )
                            }
                        </div>
                    )
            }
        </div>
    </div>
  )
}
