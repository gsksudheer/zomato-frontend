import React from 'react';
import { BiStar, BiBookmarkPlus } from 'react-icons/bi';
import { MdDirections } from 'react-icons/md';
import { RiShareForwardLine } from 'react-icons/ri';

//Components
import Navbar from '../Components/Navbar/navbar';
import ImageGrid from '../Components/Restaurant/imageGrid';
import InfoButtons from '../Components/Restaurant/InfoButtons';
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';
import TabsContainer from '../Components/Restaurant/Tabs';
const RestaurantLayout = (props) => {
    const active = true;
    return (
        <>
            <Navbar />
            <div className="md:px-4 lg:px-0 lg:mx-40 mt-10 md:my-0">
                <ImageGrid />
                <div className="top-0 md:pt-3 bg-white">
                    <RestaurantInfo />                
                    <div className="flex hidden flex-wrap items-center gap-3 mt-6">
                        <InfoButtons {...active}>
                            <BiStar /><h4 className="text-gray-800">Add Review</h4>
                        </InfoButtons>
                        <InfoButtons>
                            <MdDirections /><h4 className="text-gray-800">Direction</h4>
                        </InfoButtons>
                        <InfoButtons>
                            <BiBookmarkPlus /><h4 className="text-gray-800">Bookmark</h4>
                        </InfoButtons>
                        <InfoButtons>
                            <RiShareForwardLine /><h4 className="text-gray-800">Share</h4>
                        </InfoButtons>
                    </div>
                    <div className="mt-5 bg-white md:block">
                        <TabsContainer />
                    </div>        
                </div>                                
                <div className="pl-2">
                    {props.children}                                        
                </div>
            </div>
        </>
    )
}

export default RestaurantLayout;