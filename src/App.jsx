import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [total, setTotal] = useState('');
  const [discount, setDiscount] = useState('');
  const [newPrice, SetNewPrice] = useState('_');
  const [savedPrice, setsavedPriece] = useState('-')
  const handleAmountChange = (e) => {
    setTotal(prev => isNaN(e.target.value) ? prev : e.target.value)
  }
  const handleDiscountChange = (e) => {
    setDiscount(prev => isNaN(e.target.value) ? prev : e.target.value);
  }
  useEffect(() => {
    let discountPercentage = discount;
    let TotalAmount = total;
    let discountAmount = TotalAmount * (discountPercentage / 100)
    SetNewPrice(TotalAmount - discountAmount);
    setsavedPriece(discountAmount);
  }, [total, discount])
  return (
    <>
      <div className='bg-zinc-950 h-screen w-full flex justify-center overflow-hidden select-none sm:items-center'>
        <div className='orange flex flex-col items-center bg-white/80 rounded-xl h-fit p-10 max-sm:h-screen max-sm:w-full '>
          <h1 className='text-blue-500 font-semibold text-2xl sm:text-3xl text-center select-none mb-5'>Discount Calculator</h1>

          <div className='bg-white h-fit w-fit p-2 mt-2 relative rounded-lg'>
            <label htmlFor="amount" className='font-semibold px-1 select-none'>₹</label>
            <input
              id='amount'
              onChange={handleAmountChange}
              value={total}
              className='focus:outline-none' type='text' placeholder='Enter Total Amount ' />
          </div>
          <div className='bg-white h-fit w-fit p-2 mt-2 relative rounded-lg'>
            <input
              id='amount'
              onChange={handleDiscountChange}
              value={discount}
              className='focus:outline-none text-right placeholder:text-left' type='text' placeholder='Enter discount' />
            <label htmlFor="amount" className='font-semibold px-1 select-none'>%</label>
          </div>
          <div>
            <div className='w-fit h-fit'>
              <div
                className='w-[250px] bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold  mt-5 px-12 py-2  rounded-t-xl'>Amount to be paid</div>
              <div className='bg-white h-fit w-full rounded-b-xl'>
                <div className='text-center font-semibold'>New Price</div>
                <div className='text-center text-2xl font-semibold text-blue-500 pb-2'>
                  <span className='pr-2'>₹</span>
                  <span>{newPrice}</span></div>
              </div>
            </div>
            <div className='w-fit h-fit'>
              <div
                className='bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold  mt-5 px-12 py-2 w-[250px] rounded-t-xl'>Savings Amount</div>
              <div className='bg-white h-fit w-full rounded-b-xl'>
                <div className='text-center font-semibold'>Amount Saved</div>
                <div className='text-center text-2xl font-semibold text-blue-500 pb-2'>
                  <span className='pr-2'>₹</span>
                  <span>{savedPrice}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App