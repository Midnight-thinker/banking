import React from 'react';
import img from '../images/card.jpg';
import bg from '../images/card_bg.jpg';
import Modal from './Modal';

function Account() {
  return (
    <div>
    <img className="cardbg" src={bg} alt='bg.jpg'></img>
        <div class="card" style={{width: "350px" , height: "500px"}}>
            <img src={img} class="card-img-top" alt="Profile" />
            <div class="card-body">
                <h5 class="card-title" style={{fontWeight: "bolder",paddingBottom: "20px"}}>Account Details:</h5>
                <p class="card-text"><span>Balance:</span> 50,0000</p>
                <p class="card-text"><span>Name:</span> Debasmita Chakraborty</p>
            </div>
            
        </div>
    </div>
    
  )
}

export default Account
