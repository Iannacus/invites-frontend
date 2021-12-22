import React from "react";
import Button from "../Button/Button";

const ReceptionCard = ({img, placeName, placeDescription, hour, ubication}) => {
  return(
    <div
        style={
          {
            width: '90%',
            boxShadow: '0 3px 7px 1px #bdbdbd',
            paddingBottom: '15px',

          }
        }
      >
        <img 
          style={{
            width: '100%',
            margin: '0 0 45px 0'
          }}
          src={img}
          alt='ubicación'
        />
        <h4 className='text-center' style={{color: '#9d9e9c'}}>
          {placeName}
        </h4>
        <p className='gold text-center' style={{fontSize: '18px', color:'#dcbe9f'}}> {placeDescription} </p>
        <h4 style={{marginBottom: '35px', color: '#9d9e9c'}} className='text-center'>{hour}</h4>
        <a href={ubication} target='_blank' rel="noreferrer"
          style={{
            textDecoration: 'none',
            display: 'block',
            margin: 'auto',
            width: '50%'
          }}
        >
          <Button 
            textButton='Cómo llegar'
            color='#FFF'
            bgColor='#dcbe9f'
            funct = {() => {}}
          />
        </a>
      </div>
  )
}

export default ReceptionCard;