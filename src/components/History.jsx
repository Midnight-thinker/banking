import React from 'react';
import img from '../images/history.jpg';

function history() {
  return (
    <div style={{ background: "-webkit-gradient(linear, left top, right top, from(#000), color-stop(100%, #000), color-stop(100%, #fff))"}}>
    <img className='hist' src={img}></img>
    
    <div className='lists'>
    <h2>Transaction History:</h2>
    <table>
        <tr>
        <th>Sl No.</th>
            <th>Reciever Name</th>
            <th>Amount </th>
            <th>Date</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Alfreds</td>
            <td>5000</td>
            <td>01.01.2021</td>
        </tr>
        <tr>
        <td>2</td>
            <td>Henry</td>
            <td>4000</td>
            <td>20.02.2020</td>
        </tr>
        <tr>
        <td>3</td>
            <td>Peter</td>
            <td>10,000</td>
            <td>30.02.2010</td>
        </tr>
        <tr>
        <td>4</td>
            <td>Harry</td>
            <td>10,000</td>
            <td>30.02.2010</td>
        </tr>
        <tr>
        <td>5</td>
            <td>Piu</td>
            <td>7,000</td>
            <td>30.02.2015</td>
        </tr>
    </table>
    </div>
    </div>
  )
}

export default history
