import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/home">Loanzz</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active mx-2" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active mx-2" to="/transfer">Transaction
          </Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link active mx-2" to="/account">Account</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active mx-2" to="/about">About</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
