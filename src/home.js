import React from 'react'
import './App.css'
import wpp from './images/whatsapp.png'
import floral  from './images/floral (2).png'
import floral1  from './images/floral-removebg-preview (1).png'
import noivos  from './images/noivosl-removebg-preview.png'
import mps from './images/Vectorizeimages-Iconpack-Map.512.png'
import { Link } from 'react-router-dom';
function home({value}) {

  return (
    <div className="fundo-convite">
   
    <div className='fundoConvite'>
  
      <div className='container-utensilho'>
          <img alt='floral' className='floral' src={floral}/>
          <img alt='floral' className='floral1' src={floral1}/>
    </div>
    
      <h1 className='Nome text bottom'> Andre e Erica</h1>
      <img alt='noivos' className='noivos' src={noivos}/>
      <h2 className='Nome msg'>Convidam você <h2 className='nomeCon'>{value}</h2> e sua familia  para o cha de pánela.</h2>
      <div className='date'>
      <h1 className='Nome mes'>ABRIL </h1>
      <h2 className='Nome data'>Sábado <span className='numeral'>15</span> ás 11:30</h2>
      <h2 className='Nome mes'>2023</h2>
      </div>
      <div className='links'>
      <Link className='lin' to="https://api.whatsapp.com/send?phone=5562993926390&text=Estou%20confirmando%20minha%20presen%C3%A7a%20no%20casamento!" target='_blank'>
      <img alt='whatsapp' src={wpp}/>
      <h3> Confirmar presença</h3>
     </Link>
      <Link className='lin' to="https://goo.gl/maps/3cvehJ59wbWZV4r26" target='_blank'>
      <img alt='whatsapp' src={mps}/>
      <h3>Endereço</h3></Link>
      </div>
    
    </div>
    </div>
  );
}

export default home;
