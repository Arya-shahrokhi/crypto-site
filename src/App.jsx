

import './App.css';

import { Routes ,Route } from 'react-router-dom';
import NAVbar from './components/ui/Navbar.component';
import WRApper from './components/WRApper.component';
import FOOter from './components/ui/Footer.component'
import AboutUsPage from './pages/AboutUs.page';
import FAQPage from './pages/FAQ.page';
import ContactUsPage from './pages/ContactUs.page';
import HomePage from './pages/Home.page';
function App() {

  return (

  
    <div >

        
        
        <NAVbar/>
        <div className='WRApper'>
        <Routes>  
          <Route path='/HomePage' element = {<HomePage/>} />          
          <Route path='/faq' element ={<FAQPage/>} />
          <Route path='/ContactUs' element = {<ContactUsPage/>} />
          <Route path='AboutUs' element = {<AboutUsPage/>} />
        </Routes>
        </div>
    
        <FOOter/>  

    </div>


  );
}

export default App;
