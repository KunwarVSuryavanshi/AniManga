import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage';
import AnimePage from './Components/AnimePage';
import MangaPage from './Components/MangaPage';
import { Auth0Provider } from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH_DOMAIN
const clientID = process.env.REACT_APP_AUTH_CLIENTID

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientID}
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
    <App/>
      <Routes>
        <Route exact path='/home' element={<HomePage/>}/>
        <Route exact path='/anime' element={<AnimePage/>}/>
        <Route exact path='/manga' element={<MangaPage/>}/>
      </Routes>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
);
reportWebVitals();
