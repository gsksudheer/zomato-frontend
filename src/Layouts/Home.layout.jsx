import React from 'react';

//components
import Navbar from '../Components/Navbar/navbar';
import Tabs from '../Components/Tabs';

const HomeLayout = (props) => {
  return (
    <>
        <Navbar />        
        <Tabs />            
        <div>
            {props.children}
        </div>
    </>
  )
};

export default HomeLayout;