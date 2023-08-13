
import './App.css';
import About from './pages/About';
import Main from './pages/Main';
import WhyChooseUs from './pages/WhyChooseUs'
import ContactUs from './pages/ContactUs'
import { BrowserRouter , Route , Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/WhyChooseUs" element={<WhyChooseUs/>} />
      <Route path='/ContactUs' element={<ContactUs/>}></Route>

    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
