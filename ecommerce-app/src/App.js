import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import React from 'react';
import { Login } from './Pages/Login';
import { Shop } from './Pages/Shop';
import { Cart } from './Pages/Cart';

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path='/login' element={<Login />} /> 
                <Route path='/' element={<Shop />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </Router>
    )
}
export default App
