import React from 'react';
import {MdStar} from 'react-icons/md'
const ReviewCard = () => {
  return (
      <> 
        <div className="flex flex-col border-b-2 border-gray-200 pb-4 pt-5 px-3 py-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-14 h-14">
                        <img src="https://b.zmtcdn.com/images/user_avatars/pizza_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="user" className="w-full h-full rounded-full shadow-md"/>
                    </div>
                    <div>
                        <h2 className="text-lg font-medium">Sudheer Kumar</h2>
                        <h4 className="text-md font-light">23 reviews &bull; 200 followers</h4>
                    </div>
                </div>
                <button className="px-2 py-1 md:px-3 md:py-2 text-md md:text-lg text-red-400 border border-red-400 rounded-lg">
                    Follow
                </button>
            </div>
            <div className="flex items-center gap-3 mt-3">
                <span className="flex items-center gap-1 bg-green-800 rounded-md px-1 text-sm text-white">3 <MdStar /></span>
                <h4 className="text-sm font-light text-gray-800">DELIVERY</h4>
                <small className="text-sm font-light">11 days ago</small>
            </div>
            <div className="mt-2">
                <p className="text-md md:text-lg font-light">quickest delivery I ever had... 😊</p>
            </div>
        </div>
      </>
    )
}

export default ReviewCard;