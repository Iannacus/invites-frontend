import React from 'react';
import Mentions from './menciones/Mentions';
import './Section2.css';

const Section2 = ({ firstname, lastname }) => {
  return(
    <div
      style={{border: '1px solid #82bed6', margin: '15px'}} 
      className='centerItem container'>
      <h2 className='blue b-shadow'>Mis Padres</h2>
      <br />
      <p className='no-margin gold'>Edith Ramos López</p>
      <p className='no-margin gold '>Hugo Contreras García</p>
      <br />
      <p
        style={{margin: '0'}} 
        className='text-center no-margin gold'>
        Tienen el honor de invitar a <b>{firstname} {lastname}</b> a celebrar un momento especial
        en la vida de su amada hija. 
      </p>

      <br />

      <h2 className='blue b-shadow'>Mis Padrinos</h2>
      <div className='mention-container'>
        <Mentions title='Madrina de Vestido'>
          <p className='no-margin gold  text-center'>Lorena González</p>
        </Mentions>
        <Mentions title='Madrina de Zapatillas'>
          <p className='no-margin gold  text-center'>Zulia Marín de Estañol</p>
        </Mentions>
        <Mentions title='Madrina de Pastel'>
          <p className='no-margin gold  text-center'>Yanitzi Quiñonez de Mendoza</p>
        </Mentions>
        <Mentions title='Madrina de Comida'>
          <p className='no-margin gold  text-center'>Saida Contreras García</p>
        </Mentions>
        <Mentions title='Madrinas de Mesa de Dulces'>
          <p className='no-margin gold  text-center'>Lili Marín de Chacón</p>
          <p className='no-margin gold  text-center'>Zulma Contreras García</p>
        </Mentions>
        <Mentions title='Madrina de Peinado y Maquillaje'>
          <p className='no-margin gold  text-center'>Apolonia Támara Marín García</p>
        </Mentions>
        <Mentions title='Madrina de Uñas'>
          <p className='no-margin gold  text-center'>Mariamfty Maldonado Sandoval</p>
        </Mentions>
        <Mentions title='Padrino de Decoración'>
          <p className='no-margin gold  text-center'>Nelsón Contreras García</p>
        </Mentions>
      </div>
     
      
    </div>
  )
}

export default Section2;