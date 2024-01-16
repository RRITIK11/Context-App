import React from 'react'

export const Card = ({post}) => {
  return (
    <div key={post.id} className='border-2 p-2 bg-slate-200 rounded-lg'>
        <p className='font-bold'>{post.title}</p>
        <p>By <span className='italic'>{post.author}</span> on <span className='font-semibold'>{post.category}</span></p>
        <p>Posted On {post.date}</p>
        <br/>
        <p>{post.content}</p>
        <div className='flex gap-2 text-blue-600 underline'>{post.tags.map((tag,index) => (<span key={index}>#{tag}</span>))}</div>
    </div>
  )
}
