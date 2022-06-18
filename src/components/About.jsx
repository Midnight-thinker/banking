import React from 'react'
import account from "../images/account.jpg"

function About() {
  return (
    <>
    <div>
    <img src={account} alt="img" className='aboutimg'  style={{width : "650px" , height: "650px" }} />
    </div>
    <div class="card about" style={{width : "550px"}}>
    <div class="card-body">
        <h5 class="card-title">About Us</h5>
        <p class="card-text">Hello ! This is Debasmita chakraborty! Creator of this project ! 
        Task 1 of internship at The Spark Foundation! This project made using tech stack like HTML , CSS , BootStrap , Jsx , React Js , Javascript.</p>
    </div>
    </div>
    <div class="card about-2" style={{width : "550px"}}>
    <div class="card-body">
        <h5 class="card-title">More about us!</h5>
        <p class="card-text">Debasmita is a React developer with a career goal to be a successful passionate Full stack Devoloper!
        Her acquired knowledge starts from HTML and extends upto MongoDB which belongs Node.js , express js , MongoDB , Restful API ,
         react , redux . She has multiple projects like Spotify Clone-made using HTML , CSS , Javascript , TextUtils - A text editing Website
         made using HTML , CSS , React , Javascript , Ecommerce Website -made using HTML , CSS , BootStrap , react , Javascript  </p>
    </div>
    </div>
    </>
  )
}

export default About
