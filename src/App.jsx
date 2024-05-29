import './App.css'
import  React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HeaderComponent from './Components/NavBar';
import HomeContainer from './Components/HomePage';
import DetailsContainer from './Components/MovieDetails/MovieDetailPage';
import AppProvider from './Components/Context/StateContext';

function App() {

  return (
    < >
      <div className='App'>
        <AppProvider>
              <BrowserRouter>
                  <HeaderComponent />
                      <Routes>
                          <Route path="/" element={<HomeContainer category="popular" heading="Popular"/>} />
                          <Route path="/top-rated" element={<HomeContainer category="top_rated" heading="Top Rated"/>} />
                          <Route path="/upcoming" element={<HomeContainer category="upcoming" heading="Upcoming"/>} />
                          <Route path="/details/:movieid" element={<DetailsContainer />} />
                      </Routes>
              </BrowserRouter>
          </AppProvider> 
      </div>
    </>
  )
}

export default App
