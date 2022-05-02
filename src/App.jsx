import './App.css';
import { Route, Redirect } from 'react-router-dom';

//HOC
import HomeLayoutHoc from './HOC/Home.hoc';
import RestaurantLayoutHoc from './HOC/Restaurant.HOC';

//pages
import Home from './pages/Home';
import Overview from './pages/Restaurant/overview';
import OrderOnline from './pages/Restaurant/orderOnline';
import Reviews from './pages/Restaurant/reviews';
import Menu from './pages/Restaurant/Menu';
import Photos from './pages/Restaurant/Photos';

import Temp from './Components/temp';


//React slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
    <Route path="/" exact>
      <Redirect to="/delivery" />  
    </Route>  
    {/* <Route path="/restaurant/:id">
      <Redirect to="/restaurant/:id/order-online" />
    </Route>  */}
   
    <HomeLayoutHoc path="/:type" exact component={Home} />
    <RestaurantLayoutHoc path="/restaurant/:id/overview" exact component={Overview} />
    <RestaurantLayoutHoc path="/restaurant/:id/order-online" exact component={OrderOnline} />
    <RestaurantLayoutHoc path="/restaurant/:id/reviews" exact component={Reviews} />
    <RestaurantLayoutHoc path="/restaurant/:id/menu" exact component={Menu} />
    <RestaurantLayoutHoc path="/restaurant/:id/photos" exact component={Photos} />

    </>
  )
}

export default App;
