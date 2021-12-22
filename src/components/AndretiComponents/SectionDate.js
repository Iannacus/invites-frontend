import React from 'react';
import Contador from '../dateSection/Contador';
import img2 from '../../img/andreti/baptism.jpg'
import Button from '../Button/Button';
import Loader from '../Loader';

const SectionDate = ({firstname, lastname, confirmation, guestId, loading, setSpiner}) => {

  const handleConfirmation = () => {
      setSpiner(true);
      fetch(`https://invitaciones-back.herokuapp.com/api/v1/guests/${guestId}`, {
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({confirmation: true, guest_number: 0})
      })
      .then(response => response.json())
      .catch(error => console.error('Error', error))
      .then(response => {
        setSpiner(false);
        console.log(response);
        window.location.reload(true);
      });

  }

  const handleAlert = () => {
    window.alert("Ya has confirmado tu asistencia");
  }

  return(
    <div 
      className='hero'
      style={
        {
          backgroundImage: `url(${img2}`,
        }
      } 
    >
      <div 
        className='shadow'
        style={{padding: '15px'}}
      >
        <div
          className='fullScreen centerItem section-border'
        >
        <p
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: '20px',
              margin: '0'
            }}
          >
            {firstname} {lastname}
          </p>
          <p
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: '20px',
            }}
          >
            Estas cordialmente invitado a la celebración de mi bautismo.
          </p>
          <h2 style={{color: '#FFF', fontSize: '48px', marginBottom: '20px'}}>08 enero 2022</h2>
          <h5 style={{color: '#FFF'}}>Sólo Faltan: </h5>
          <Contador />
          {
            loading ? 
              <Loader />
              :
              !confirmation ? 
                <div className='inputs'>
                  <Button 
                    textButton='Confirmar Asistencia'
                    color='#fff' 
                    bgColor='#dcbe9f'
                    funct={handleConfirmation}
                  />
                </div>
                : 
                <Button 
                  textButton='Gracias por confirmar tu asistencia'
                  color='#fff' 
                  bgColor='#dcbe9f'
                  funct={handleAlert}
                />
          }
        </div>
      </div>
    </div>
  )
}

export default SectionDate;