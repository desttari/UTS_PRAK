import React from 'react';
import '../../App.sass';
import gam1 from './11.png';
import gam2 from './12.png';
import gam3 from './13.png';
import './gallery.sass';


function gallery() {
  return(
    <>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={gam1} class="d-block w-100 " alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={gam2} class="d-block w-100 " alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src={gam3} class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="card">
      <div className="card-header bq">
        Quote
      </div>
      <div className="card-body bd">
        <blockquote class="blockquote mb-0 ">
          <p>“Such short little lives our pets have to spend with us, and they spend most of it waiting for us to come home each day.”  </p>
          <footer class="blockquote-footer">John Grogan<cite title="Source Title"> (Author, Marley & Me)</cite></footer>
        </blockquote>
      </div>
    </div>
    <br/>
    <div class="card">
      <div className="card-header bq">
        Quote
      </div>
      <div className="card-body bd">
        <blockquote class="blockquote mb-0  ">
          <p>“Every dog must have his day.” </p>
          <footer class="blockquote-footer">Jonathan Swift<cite title="Source Title"> (Author, Gulliver’s Travels)</cite></footer>
        </blockquote>
      </div>
    </div>
    </>

  )
  
 
}

export default gallery;
