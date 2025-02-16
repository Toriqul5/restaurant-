import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './component/common/Footer'
import Navbar from './component/common/Navbar'

import Homepage from './component/Homepage';

import LastPage from './component/last-page/LastPage';

import MyCard from './component/best-restaurants/best';
import SearchBar from './component/common/searchbar';




function App() {
  

  return (
    <>
     <Navbar/>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage/>} /> 
        <Route path="common/searchbar" element={<SearchBar />} />
        <Route path="best" element={<MyCard />} />
        <Route path="/last-page" element={<LastPage/>} />
          
    </Routes>
    </BrowserRouter>
    <Footer />


    
      

    
       
        
       
    </>
  )
}

export default App
