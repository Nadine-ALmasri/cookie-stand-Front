import logo from './logo.svg';
import './App.css';
import Home from './componants/Home';
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componants/Header';
import CookieStandForm from './componants/CookieStandForm';
import Footer from './componants/Footer';
import { handleCookieStandCreate } from './componants/CookieStandForm'
import {handleSubmit}from'./componants/CookieStandForm'
import { useState } from 'react';
function App() {
  // Initialize an array to store cookie stands
  const [cookieStands, setCookieStands] = useState([]);

  // Function to handle creating a new cookie stand
  const handleCookieStandCreate = (newCookieStand) => {
    // Add the new cookie stand to the array
    setCookieStands([...cookieStands, newCookieStand]);
  };
  return (
   <>
   
   <Header/>

   <Routes>

    <Route path='/' element={<Home/>}></Route>

  
   </Routes> 
   <CookieStandForm onCookieStandCreate={handleCookieStandCreate} />
   <div>
        <h2>Cookie Stands</h2>
        <ul>
          {cookieStands.map((cookieStand, index) => (
            <li key={index}>
              Location: {cookieStand.location}, Min Customers: {cookieStand.minCustomers}, Max Customers: {cookieStand.maxCustomers}, Avg Cookies Per Sale: {cookieStand.avgCookiesPerSale}
            </li>
          ))}
        </ul>
      </div>
<Footer/>
   </>
  );
}

export default App;
