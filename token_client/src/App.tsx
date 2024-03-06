import React from 'react'
import Submit from './screens/Submit'
import Token from './screens/Token'
import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";
import NotFount from './screens/NotFount';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Submit/>}></Route>
    <Route path='/token/:token' element={<Token/>}></Route>
    <Route path='*' element={<NotFount />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App