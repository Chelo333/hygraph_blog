import React from 'react'
import Image from 'next/image'

const Author = ({authors}) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20 ">
      <div className="absolute left-0 right-0 -top-14">

     
      {<Image
      unoptimized
            key={authors}
            alt={authors.name}
            height="100px"
            width="100px"
            className="align-middle rounded-full"
            src={authors.photo?.url}
  />}
      </div>
      <h3 className="text-white my-4 text-xl font-bold " key={authors}>{authors.name}</h3>
      <p className="text-white text-lg" key={authors}>{authors.bio}</p>
    </div>
  )
}

export default Author
