import react from 'react'
// import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOredr from './Pages/PlaceOrder/PlaceOredr';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOredr />} />
      </Routes>
    </div>
  )
}

export default App;