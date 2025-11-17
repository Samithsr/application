import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContex } from '../../context/StoreContex'

const FoodDisplay = () => {

    const {food_list} = useContext(StoreContex)
    return (
        <div className='food-display' id='food-display'> 
            <h2>Top dishes near you</h2>
        </div>
    )
}

export default FoodDisplay