import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import XVCamila from './pages/XVCamila';
import Home from './pages/Home';
import './App.css';

function App() {
  const [eventInformation, setEventInformation] = useState(null);
  const [eventGuest, setEventGuest] = useState([]);

  useEffect(() => {
    fetch('https://invitaciones-back.herokuapp.com/api/v1/events/1/information')
    .then(response => response.json())
    .then(data => setEventInformation(data));
  }, [])

  useEffect(() => {
    if(eventInformation !== null){
      console.log(eventInformation.guests);
      setEventGuest(eventInformation.guests)
    }
  }, [eventInformation]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
          <Route path="/camila" element={<XVCamila firstname='' lastname='' />} />
          {
            eventGuest.map((guest, i) =>
                  <Route 
                    path={`/camila/${guest.firstname}`} 
                    element={
                      <XVCamila
                        firstname={guest.firstname}
                        lastname={guest.lastname}
                      />
                    }  
                    key={i} 
                  />
            )
          }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
