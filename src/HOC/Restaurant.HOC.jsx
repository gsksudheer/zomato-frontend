import React from 'react';
import { Route } from 'react-router-dom';
//Layout
import RestaurantLayout from '../Layouts/Restaurant.layout';

const RestaurantHoc = ({component: Component, ...rest}) => {
    return (
        <>
            <Route 
                {...rest}
                component={(props) => (
                    <RestaurantLayout>
                        <Component {...props} />
                    </RestaurantLayout>
                )}
            />
        </>
    )
}

export default RestaurantHoc;