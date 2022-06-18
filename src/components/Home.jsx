import React from 'react';
import bg from '../images/bg.jpg';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div  style={{ background: "-webkit-gradient(linear, left top, right top, from(#000), color-stop(100%, #000), color-stop(100%, #fff))"}}>
    <img  className='bg' src={bg}></img>
      <h1 className='heading'>Get your loan anytime you need !</h1>
      <p className='paragraph'>Find the best monthly payment.
      Apply for business loans in minutes without any kind of hesitations.</p>
      <Link to={'/transfer'}>
      <button type="button"  class="btn btn-outline-light llight">Get Started</button>
      </Link>
    </div>
  )
}

export default Home
//