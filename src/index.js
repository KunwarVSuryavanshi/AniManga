import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import AnimePage from './Components/AnimePage';
import MangaPage from './Components/MangaPage';

ReactDOM.render(
    <BrowserRouter>
    <App/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/anime' element={<AnimePage/>}/>
        <Route exact path='/manga' element={<MangaPage/>}/>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
