// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";


const App = () => {
  return(
  <div>
    <Navbar />
    <Homepage />
    <Footer />
  </div>

  );
}

export default App; 


{/* <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='/' element={<ProductDetails />}/> 
      <Route exact path='/' element={<Homepage />}/>
    </Routes>
    <Footer />
  </BrowserRouter> */}
