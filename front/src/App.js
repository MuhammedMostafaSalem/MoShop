import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from './components/utility/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
