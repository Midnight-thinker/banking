import React from "react";


function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Transaction Successful!</h1>
        </div>
        <div className="footer">
          <button className="btn btn-secondary"
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button className="btn btn-primary">View History</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;