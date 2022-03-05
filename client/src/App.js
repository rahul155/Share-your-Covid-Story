import React from 'react';
import {Box} from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Home from './Components/Home/Home.jsx';
import CreateView from './Components/Home/post/CreateView.jsx';

function App() {
  return (
<Router>

    <Header />
    <Box style={{marginTop:64}}>
    
    <Routes>
    
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/create' element={<CreateView/>}/>
    
    </Routes>      
    
    </Box>
    
      
      </Router> 
     
 

  );
}


export default App;
