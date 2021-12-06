import React from 'react';
import Mentions from './menciones/Mentions';
import './Section2.css';

const Section2 = ({ firstname, lastname }) => {
  return(
    <div className='centerItem container'>
      <h1>Mis Padres</h1>
      <p className='subtitle'>Edith Ramos López</p>
      <p className='subtitle'>Hugo Conteras García</p>
      <br />
      <h1>Mis Padrinos</h1>
      <div className='mention-container'>
        <Mentions title='Madrina de Vestido'>
          <p className='subtitle text-center'>Lorena González</p>
        </Mentions>
        <Mentions title='Madrina de Zapatillas'>
          <p className='subtitle text-center'>Zulia Marín de Estañol</p>
        </Mentions>
        <Mentions title='Madrina de Pastel'>
          <p className='subtitle text-center'>Yanitzi Quiñonez de Medoza</p>
        </Mentions>
        <Mentions title='Madrina de Comida'>
          <p className='subtitle text-center'>Zaida Contretas García</p>
        </Mentions>
        <Mentions title='Madrina de Mesa de Dulces'>
          <p className='subtitle text-center'>Lili Marín de Chacón</p>
          <p className='subtitle text-center'>Zulma Contreras García</p>
        </Mentions>
        <Mentions title='Madrina de Peinado y Maquillaje'>
          <p className='subtitle text-center'>Apolonia Támara Marín García</p>
        </Mentions>
        <Mentions title='Madrina de Uñas'>
          <p className='subtitle text-center'>Mariamfty Maldonado Sandoval</p>
        </Mentions>
        <Mentions title='Padrino de Decoración'>
          <p className='subtitle text-center'>Nelsón Contreras García</p>
        </Mentions>
      </div>
     
      <br />
      <p className='text-center'>
        Tienen el honor de invitar a <b>{firstname} {lastname}</b> celebrar un momento muy especial
        en la vida de su amada hija. 
      </p>
    </div>
  )
}

export default Section2;