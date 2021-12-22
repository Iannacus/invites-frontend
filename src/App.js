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
  const [andrettiEventInformation, setAndrettiEventInformation] = useState(null);
  const [andrettiGuest, setAndrettiGuest] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://invitaciones-back.herokuapp.com/api/v1/events/1/information')
    .then(response => response.json())
    .then(data => setEventInformation(data));
  }, []);

  useEffect(() => {
    fetch('https://invitaciones-back.herokuapp.com/api/v1/events/2/information')
    .then(response => response.json())
    .then(data => setAndrettiEventInformation(data));
  }, []);

  useEffect(() => {
    if(eventInformation !== null){
      console.log(eventInformation.guests);
      setEventGuest(eventInformation.guests)
    }
    if(andrettiEventInformation !== null){
      console.log(andrettiEventInformation.guests);
      setAndrettiGuest(andrettiEventInformation.guests)
    }
  }, [eventInformation, andrettiEventInformation]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BautizoAndreti />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard guests={eventGuest}/>} />
        <Route path="/andretti/dashboard" element={<Dashboard guests={andrettiGuest}/>} />
          {
            andrettiGuest.map((guest) => 
                  <Route 
                    path={`/andretti/${guest.id}`} 
                    element={
                      <BautizoAndreti 
                        firstname={guest.firstname}
                        lastname={guest.lastname}
                        confirmation={guest.confirmation}
                        id={guest.id}
                        loading={loading}
                        setSpiner={setLoading}
                      />
                    }  
                    key={guest.id} 
                  />
            )
          }
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
