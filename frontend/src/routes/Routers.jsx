
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact"
import Services from "../pages/Services"



import {Routes, Route} from 'react-router-dom';

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Services" element={<Services/>}/>
    </Routes>
};

export default Routers;