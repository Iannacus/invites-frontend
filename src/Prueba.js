import React, {useState, useEffect} from 'react';

const Prueba = () => {
  const [eventInformation, setEventInformation] = useState(null);
  const [eventGuest, setEventGuest] = useState([]);

  useEffect(() => {
    fetch('https://invitaciones-back.herokuapp.com/api/v1/events/1/information')
    .then(response => response.json())
    .then(data => setEventInformation(data));
  }, [])

  useEffect(() => {
    if(eventInformation !== null){
      console.log(eventInformation);
      setEventGuest(eventInformation.guests)
    }
  }, [eventInformation]);

  handleConfirmation = () =>{
    
  }

  return(
    <div style={{padding: "0 20px"}}>
      <h1>Hola Invitados</h1>
      {
        eventGuest.map((guest, i) => {
          return(
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <h2 key={i}>{guest.firstname} {guest.lastname}</h2>
            <input type="checkbox" value={guest.confirmation} onChange={() => handleConfirmation}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Prueba;