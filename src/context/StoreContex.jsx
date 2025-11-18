import { createContext, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContex = createContext("null")

 const StoreContextProvider = (props) => {


    const [cartItems,setCartItems] = useState({});
    
    const addToCart = (itemid) => {
        if(!cartItems[itemid]) {
            setCartItems((prev)=>({...prev,[itemid]:1}))
        }  else {
            setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }
    }
    
    const contextValue = {
        food_list
    }
    return(
        <StoreContex.Provider value={contextValue}>
            {props.children}
        </StoreContex.Provider>
    )
}

export default StoreContextProvider;