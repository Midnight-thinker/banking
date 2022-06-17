import React from 'react'
import account from "../images/account.jpg"

function About() {
  return (
    <>
    <div>
    <img src={account} alt="img"  style={{width : "550px" , height: "550px" }} />
    </div>
    <div class="card about" style={{width : "550px"}}>
    <div class="card-body">
        <h5 class="card-title">About Us</h5>
        <p class="card-text">Hello ! This is Debasmita chakraborty! Creator of this project ! 
        Task 1 of internship at The Spark Foundation! This project made using tech stack like HTML , CSS , BootStrap , React Js , Javascript.</p>
    </div>
    </div>
    </>
  )
}

export default About
