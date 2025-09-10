import React from 'react'

const Plan = () => {
  return (
    <div className='text-center'>
      <h1 className='text-4xl'>Our pricing plan</h1>
      <p className='pt-4'>Pricing That Adapts to Your Success</p>
      <div className=' bg-red-400 flex justify-evenly gap-2  rounded-2xl w-[400px] m-auto mt-4 '>
        <button>Monthly</button>
        <button className='w-[130px] bg-amber-200 rounded-2xl'>Quarterly</button>
        <button>Yearly</button>
      </div>
    </div>
  )
}

export default Plan
