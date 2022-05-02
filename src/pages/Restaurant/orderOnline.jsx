import React from 'react';
import { RiCompass3Line } from 'react-icons/ri';
import { MdOutlineWatchLater } from 'react-icons/md';
import FoodList from '../../Components/Restaurant/OrderOnline/FoodList';
const OrderOnline = () => {
  const menu = [

  ]
  return (
    <>
        <div className="flex items-start gap-5 mt-3 border-t border-gray-300">
          <aside className="hidden md:flex flex-col gap-4 w-1/5 bg-red-900">
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, nulla dolorum ratione atque, ipsam provident ipsa quisquam natus, eius nobis quasi at ducimus id odit velit eos repellendus a ut.
          </aside>
          <div className="w-4/5 flex flex-col items-start gap-3">
            <h2 className="text-xl font-bold">Order Online</h2>
            <h4 className="flex items-center justify-center gap-2 text-md font-gray-400">
              <RiCompass3Line /> Live tracking not available &nbsp; | <MdOutlineWatchLater /> 30 min
              </h4>
            <section className="">
              <FoodList />              
            </section>
          </div>
        </div>
    </>
  )
}

export default OrderOnline;