import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContex } from '../../context/StoreContex'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContex)
    return (
        <div className='food-display' id='food-display'> 
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item,index)=>{
                    return (
                        <div key={index} className="food-display-list-item">
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FoodDisplay