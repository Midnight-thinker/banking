import React from 'react';
import img from '../images/transfer.jpg'
import { Link } from 'react-router-dom'

function Transfer() {
  return (
    <div>
      <img className='transfer' src={img}></img>
      <form className='form'>
        <h1 class="h3 mb-3 fw-normal">Easy Transfer!</h1>

        <div class="form-floating my-1">
        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Reciver Name</label>
        </div>
        <div class="form-floating two my-1">
        <input type="text" class="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">Amount</label>
        </div>
        <div class="form-floating three my-1">
        <input type="text" class="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">Note</label>
        </div>
        <Link to={'/history'}>
        <button class="btn btn-lg btn-primary post" type="submit">Send</button>
        </Link>
    </form>
    </div>
  )
}

export default Transfer
