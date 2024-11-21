import "./App.css";
import CardDetail from "./Component/CardDetail";
import Header from "./Component/Header";
import Home from "./Component/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import  {BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<CardDetail/>} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
