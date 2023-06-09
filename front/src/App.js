import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from './components/utility/Navbar/Navbar';
import Footer from "./components/utility/Footer/Footer";
import ProductList from "./pages/ProductList";
import ProductsDetails from "./pages/ProductsDetails";
import Cart from "./pages/cart";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

function App() {

  const user = true;

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/products/:category" element={<ProductList/>}/>
          <Route path="/product/:id" element={<ProductsDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={user ? <Navigate to='/'/> : <LogIn/>}/>
          <Route path="/register" element={user ? <Navigate to='/'/> : <Register/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
