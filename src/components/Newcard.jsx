import React from 'react'

function Newcard({ cardname, carddescription, image }) {
  return (
    <div className='flex justify-center margin-top'>
      <div class="w-[300px] md:w-5/6 rounded-md border mt-12 ">
        <img
          src={image}
          alt="Laptop"
          class="h-[100px] w-full rounded-md object-cover"
        />
        <div className=" p-3">
          <h1 class="text-lg font-semibold">{cardname}</h1>
          <p class="mt-0.5 text-sm text-gray-600">
            {carddescription}
          </p>
          <button
            type="button"
            className=" w-full mt-2 rounded-sm bg-black  py-1 text-[14px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read
          </button>
        </div>
      </div>
    </div>


  )
}

export default Newcard