import React from 'react';
import Flickity from 'react-flickity-component';
import foto1 from '../../img/fotosXVCamila/uno.png'
import foto3 from '../../img/fotosXVCamila/3.png'
import foto4 from '../../img/fotosXVCamila/4.png'
import foto6 from '../../img/fotosXVCamila/6.png'
import foto7 from '../../img/fotosXVCamila/7.png'

const flickityOptions = {
  intialIndex: 1
}

const Carousel = () => {
  return (
    <Flickity
      className={'carousel'}
      options={flickityOptions}
    >
      <img style={{width: '100%'}} src={foto3} alt='carousel item camila' />
      <img style={{width: '100%'}} src={foto4} alt='carousel item camila' />
      <img style={{width: '100%'}} src={foto6} alt='carousel item camila' />
      <img style={{width: '100%'}} src={foto1} alt='carousel item camila' />
      <img style={{width: '100%'}} src={foto7} alt='carousel item camila' />

    </Flickity>
  )
}

export default Carousel;