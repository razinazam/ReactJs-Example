import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 img-responsive" src="/images/cathryn-lavery-67852-unsplash.jpg" alt="First slide"/>
      <h1>Top Recipes of the Month - Tasty & Tasty </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium saepe quis nulla enim quibusdam nisi quidem, doloremque itaque sit unde reprehenderit neque placeat illo ipsa tempora voluptas odio aliquam?</p>
    </div>
    <div class="carousel-item">
    <h1 className="Slideheading">Top Recipes of the Day - Tasty & Tasty Food </h1>
    <p className="Slidepara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facere beatae minus autem praesentium corrupti ex,</p>
      <img class="d-block w-100 img-responsive" src="/images/glenn-carstens-peters-203007-unsplash.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
    <h1>Award Winner Recipe - of the Year</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur consequatur expedita ratione qui! </p>
      <img class="d-block w-100 img-responsive" src="/images/andrew-neel-308138-unsplash.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      </div>
    );
  }
}
