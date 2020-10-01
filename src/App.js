import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./Components/Pages/Dialogs/Dialogs";
import Profile from "./Components/Pages/Profile/Profile";
import News from "./Components/Pages/News/News";
import Music from "./Components/Pages/Music/Music";
import Settings from "./Components/Pages/Settings/Settings";


function App() {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <NavBar/>
      <div className='app-wrapper__content'>
        <Route path='/profile' component={Profile}/>
        <Route path='/dialogs' component={Dialogs}/>
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/settings' component={Settings}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
