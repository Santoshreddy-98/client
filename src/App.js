import React,{createContext,useState} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Nav from './Nav';
import Register from './Register';
import Login from './Login';
import Myprofile from './MyProfile';

export const store = createContext()

const App = () => {
  const [token,setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token,setToken]}>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Myprofile' element={<Myprofile/>}/>
        </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App