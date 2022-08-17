import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";

const App = () => {
    const [countries,setCountries] = useState([])
  return (
      <>
        <Header/>
        <Main>
            <Routes>
                <Route path='/' element={<HomePage countries={countries} setCountries={setCountries}/>}/>
                <Route path='/country/:name' element={<Detail/>}/>
            </Routes>
        </Main>
      </>
  );
};

export default App;