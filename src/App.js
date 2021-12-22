import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import XVCamila from './pages/XVCamila';
import Home from './pages/Home';
import './App.css';
import Dashboard from './pages/Dashboard';
import BautizoAndreti from './pages/BautizoAndreti';

function App() {
  const [eventInformation, setEventInformation] = useState(null);
  const [eventGuest, setEventGuest] = useState([]);
  const [loading, setLoading] = useState(false);

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
        <Route path="/" element={<BautizoAndreti />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard guests={eventGuest}/>} />
          {
            eventGuest.map((guest, i) =>
                  <Route 
                    path={`/camila/${guest.id}`} 
                    element={
                      <XVCamila
                        firstname={guest.firstname}
                        lastname={guest.lastname}
                        confirmation={guest.confirmation}
                        id={guest.id}
                        loading={loading}
                        setSpiner={setLoading}
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
