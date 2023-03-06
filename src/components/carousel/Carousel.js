import React from 'react';
import Flickity from 'react-flickity-component';
import uno from '../../img/aziel/gaellery/1.png';
import dos from '../../img/aziel/gaellery/2.png'; 
import tres from '../../img/aziel/gaellery/3.png';
import cuatro from '../../img/aziel/gaellery/4.png';
import cinco from '../../img/aziel/gaellery/5.png';
import seis from '../../img/aziel/gaellery/6.png';
import siete from '../../img/aziel/gaellery/7.png';
import ocho from '../../img/aziel/gaellery/8.png';
import diez from '../../img/aziel/gaellery/10.png';
import once from '../../img/aziel/gaellery/11.png';
import doce from '../../img/aziel/gaellery/12.png';
import trece from '../../img/aziel/gaellery/13.png';
import catorce from '../../img/aziel/gaellery/14.png';
import quince from '../../img/aziel/gaellery/15.png';
import diesiceis from '../../img/aziel/gaellery/16.png';
import diesiciete from '../../img/aziel/gaellery/17.png';
import diesiocho from '../../img/aziel/gaellery/18.png';


const flickityOptions = {
  intialIndex: 1
}

const Carousel = () => {
  return (
    <Flickity
      className={'carousel'}
      options={flickityOptions}
    >
      <img style={{width: '100%'}} src={uno} alt='carousel item camila' />
      <img style={{width: '100%'}} src={dos} alt='carousel item camila' />
      <img style={{width: '100%'}} src={tres} alt='carousel item camila' />
      <img style={{width: '100%'}} src={cuatro} alt='carousel item camila' />
      <img style={{width: '100%'}} src={cinco} alt='carousel item camila' />
      <img style={{width: '100%'}} src={seis} alt='carousel item camila' />
      <img style={{width: '100%'}} src={siete} alt='carousel item camila' />
      <img style={{width: '100%'}} src={ocho} alt='carousel item camila' />
      <img style={{width: '100%'}} src={diez} alt='carousel item camila' />
      <img style={{width: '100%'}} src={once} alt='carousel item camila' />
      <img style={{width: '100%'}} src={doce} alt='carousel item camila' />
      <img style={{width: '100%'}} src={trece} alt='carousel item camila' />
      <img style={{width: '100%'}} src={catorce} alt='carousel item camila' />
      <img style={{width: '100%'}} src={quince} alt='carousel item camila' />
      <img style={{width: '100%'}} src={diesiceis} alt='carousel item camila' />
      <img style={{width: '100%'}} src={diesiciete} alt='carousel item camila' />
      <img style={{width: '100%'}} src={diesiocho} alt='carousel item camila' />

    </Flickity>
  )
}

export default Carousel;