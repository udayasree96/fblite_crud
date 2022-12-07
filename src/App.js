import './App.css';
import React from 'react';
import './Feed.css'
import {BrowserRouter,Route,Link, Routes} from "react-router-dom";


import Feed2 from './Feed2';
import SignUdaya from './SignUdaya';
import LoginUdaya from './LoginUdaya';


function App() {

 
  return(
    <BrowserRouter>
    <Routes>
        <Route path="/"       element={<LoginUdaya>  </LoginUdaya>}/>
        {/*<Route path="/Signup" element={<Signup>   </Signup>}/>*/}
        <Route path="/SignUp"     element={<SignUdaya>    </SignUdaya>}/>
        <Route path="/Feed"     element={<Feed2>    </Feed2>}/>
        
    </Routes>
   
  </BrowserRouter>
  
       
    
  );
}

export default App;
