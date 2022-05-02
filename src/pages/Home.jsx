import React from 'react'
import { useParams } from 'react-router-dom';

//Components
import Delivery from '../Components/Delivery';
import Dinning from '../Components/Dinning';
import NightLife from '../Components/NightLife';
import Nutrition from '../Components/Nutrition';


const Home = () => {
  const { type } = useParams();  
  return (
    <div className="lg:mx-44">      
      { type === "delivery" && <Delivery /> }
      { type === "dinning" && <Dinning /> }
      { type === "nightlife" && <NightLife /> }
      { type === "nutrition" && <Nutrition /> }
    </div>
    )
}

export default Home;