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

  //   <div class="modal" tabIndex="-1">
  //   <div class="modal-dialog">
  //     <div class="modal-content">
  //       <div class="modal-header">
  //         <h5 class="modal-title">Modal title</h5>
  //         <button type="button" class="btn-close" onClick={() => {
  //               setOpenModal(false);
  //             }} data-bs-dismiss="modal" aria-label="Close"></button>
  //       </div>
  //       <div class="modal-body">
  //         <p>Modal body text goes here.</p>
  //       </div>
  //       <div class="modal-footer">
  //         <button type="button" onClick={() => {
  //               setOpenModal(false);
  //             }} class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  //         <button type="button" class="btn btn-primary">Save changes</button>
  //       </div>
  //     </div>
  //   </div>
  // </div>