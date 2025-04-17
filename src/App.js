import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Search from './components/Search';
import Checkout from './components/Checkout';
import CategoryFilter from './components/CategoryFilter';
import BuyNow from './components/BuyNow';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
            <ToastContainer position="top-right" autoClose={2000} />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <div className="search-filter-container">
              <Search />
              <CategoryFilter />
            </div>
            <ProductList />
            <Checkout/>
            <BuyNow/>
          </>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/buynow" element={<BuyNow />} />
        {/* <Route path="/" exact component={Cart} /> */}
      </Routes>
    </div>
  );
}

export default App;
