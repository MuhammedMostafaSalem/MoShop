import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from './components/utility/Navbar/Navbar';
import Footer from "./components/utility/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
