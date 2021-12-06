import React, { useEffect, useState } from "react";

const Dashboard = ({guests}) => {
  const [orderGuest, setOrderGuest] = useState([]);
  useEffect(() => {
    if(guests.length > 0){
      setOrderGuest(guests.sort((a, b) => a.id - b.id))
    }
  }, [guests])
  return (
    <>
      <p
        style={{
          textAlign: 'center',
          fontSize: '32px'
        }}
      >
        Lista de Invitados
      </p>
      {
        orderGuest.map((guest, i) => 
          <div 
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '90%',
                margin: 'auto',
                fontSize: '18px'
                }}
            key={i}
          >
            <div
              style={{
                width: '10%',
                backgroundColor: '#ECECEC',
                display: 'flex',
                justifyContent: 'center',
                padding: '7px 0'
              }}
            >
              {guest.id}
            </div>
            <div 
              style={{
                width: '65%',
                backgroundColor: '#ECECEC',
                display: 'flex',
                justifyContent: 'center',
                padding: '7px 0'
              }}

            >
              {guest.firstname} {guest.lastname}
            </div>
            {
              guest.confirmation ? 
                <div 
                  style={{
                    color: '#FFF', 
                    width: '25%',
                    padding: '7px 0',
                    backgroundColor: '#39A792',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >Asiste</div>
              :
              <div 
                style={{
                  color: '#FFF',
                  width: '25%',
                  padding: '7px 0',
                  backgroundColor: '#C70039',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >No asiste</div>
            }
            
          </div>
        )
      }
    </>
  )
}

export default Dashboard;