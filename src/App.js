import './App.css';
import Layout from './components/layout';
import Detail from './pages/detail';
import CartTab from './components/cartTab';
import Checkout from './components/checkout';
import Razorpay from './components/razorpay';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Home from './pages/home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main component as the initial landing page */}
        <Route path='/' element={<Main />} />
        
        {/* Layout wraps the rest of the application */}
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />} /> {/* Ensure you have Home imported */}
          <Route path='/:slug' element={<Detail />} />
          <Route path='/cart' element={<CartTab />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/razorpay' element={<Razorpay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
