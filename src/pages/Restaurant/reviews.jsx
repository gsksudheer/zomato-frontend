import React from 'react'

//Components
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard'

const Reviews = () => {
  return (
    <>
        <div className="flex flex-col  md:flex-row gap">
            <div className="flex flex-col gap-3 w-full md:w-2/3">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
            <aside className="hidden md:block w-1/3 px-5 py-4" style={{ height:"fit-content" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, ut architecto! Optio facilis labore sapiente nam rerum laborum minima quia sequi. Veniam odit dolorem minus doloremque illo sed deserunt ad!
            </aside>
        </div>
    </>
  )
}

export default Reviews;