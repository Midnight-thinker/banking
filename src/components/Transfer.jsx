import React, { useState } from 'react';
import img from '../images/transfer.jpg'
import { Link } from "react-router-dom";
import Modal from './Modal';
import Table from './Table';

function Transfer(props) {
  const [val, setVal] = useState([]);
  const [value , setValue]=useState({
    recieverName:"",
    amount:"",
    note:"",
  })

  function addValue(newVal) {
    setVal(prevVal => {
      return [...prevVal, newVal];
    });
    //console.log(setVal)
  }


  function handleClick(event){
   //console.log(event.target.value)
   const { name, value } = event.target;
   setValue(prevValue => {
    return {
      ...prevValue,
      [name]: value
    };
  })
  }


  function submitValue(event) {
    addValue(value);
    setValue({
      recieverName:"",
      amount:"",
      note:""
    });

  }

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>

    <div>
      <img className='transfer' src={img}></img>
      <form className='form'>
        <h1 class="h3 mb-3 fw-normal">Easy Transfer!</h1>

        <div class="form-floating my-1">
        <input type="text" class="form-control" name="recieverName" autoComplete='off' value={value.recieverName} id="recieverName" onChange={handleClick} placeholder="Reciever Name" />
        <label for="recieverName">Reciever Name</label>
        </div>
        <div class="form-floating two my-1">
        <input type="text" class="form-control" name="amount" autoComplete='off' value={value.amount} onChange={handleClick} id="amount" placeholder="Amount" />
        <label for="amount">Amount</label>
        </div>
        <div class="form-floating three my-1">
        <input type="text" class="form-control" name='note' value={value.note} onChange={handleClick} id="note" placeholder="Note" />
        <label for="note">Note</label>
        </div> 
        <button onClick={(event) => {
          event.preventDefault();
          setModalOpen(true);
          submitValue();
        }}  class="openModalBtn btn btn-lg btn-primary post" type="submit">Send</button>
        <Link to="/account">
      <button className='btn btn-lg btn-secondary post2 my-2'>Account </button>
      </Link>
    </form>
  
    </div>
    <div >
    <div className='lists'>
    <h2>Transaction History:</h2>
    <table>
    <tr>
    <th>Sl No.</th>
    <th>Reciever's Name</th>
    <th>Amount </th>
    <th>Note</th>
  </tr>
        {/* <Table key="1" id="1" recieverName="Piu" amount="10,000" date="12.02.19" /> */}
        {val.map((item, index) => { 
         return (
          <Table key={index}
          id={index+1}
          recieverName={item.recieverName} 
          amount={item.amount} 
          note={item.note} 
          />
        
        ); 
       })}
    </table>
    </div>
    </div>
    
    {modalOpen && <Modal setOpenModal={setModalOpen} />}

    </>
  )
}

export default Transfer
