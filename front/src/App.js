import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from './components/utility/Navbar/Navbar';
import Footer from "./components/utility/Footer/Footer";
import ProductList from "./pages/ProductList";
import ProductsDetails from "./pages/ProductsDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/products/:category" element={<ProductList/>}/>
          <Route path="/product/:id" element={<ProductsDetails/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
