import React from 'react'

function Table(props) {
  return (
    <>
       <tr>
        <td>{props.id}</td>
            <td>{props.recieverName}</td>
            <td>{props.amount}</td>
            <td>{props.note}</td>
        </tr>
    </>
  )
}

export default Table
