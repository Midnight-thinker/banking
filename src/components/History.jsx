import React from 'react';
import img from '../images/history.jpg';

function history() {
  return (
    <div style={{ background: "-webkit-gradient(linear, left top, right top, from(#000), color-stop(100%, #000), color-stop(100%, #fff))"}}>
    <img className='hist' src={img}></img>
    <div className='lists'>
    <table>
        <tr>
            <th>Reciever Name</th>
            <th>Amount </th>
            <th>Date</th>
        </tr>
        <tr>
            <td>Alfreds</td>
            <td>5000</td>
            <td>01.01.2021</td>
        </tr>
        <tr>
            <td>Henry</td>
            <td>4000</td>
            <td>20.02.2020</td>
        </tr>
        <tr>
            <td>Peter</td>
            <td>10,000</td>
            <td>30.02.2010</td>
        </tr>
        <tr>
            <td>Harry</td>
            <td>10,000</td>
            <td>30.02.2010</td>
        </tr>
        <tr>
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
