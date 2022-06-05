import React from 'react';
import bg from '../images/bg.jpg';


function Home() {
  return (
    <div  style={{ background: "-webkit-gradient(linear, left top, right top, from(#000), color-stop(100%, #000), color-stop(100%, #fff))"}}>
    <img  className='bg' src={bg}></img>
      <h1 className='heading'>Get your loan anytime you need !</h1>
      <p className='paragraph'>Find the best monthly payment.Apply for business loans in minutes without any kind of hesitations.</p>
      {/* <form action='/transfer' method='post'> */}
      <button type="button"  class="btn btn-outline-light llight">Get Started</button>
      {/* </form> */}
      
    </div>
  )
}

export default Home
//onChange={this.form.submit()}