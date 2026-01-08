import React from 'react'
import '../App.css'

export const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active car">
          <img
            src="https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg"
            className="d-block w-100 car"
            alt="First slide"
          />
          <div className="carousel-caption">
            <h5 className='text-start'>Mojito's</h5>
            <p className='text-start'>Sip the moment, taste the joy.</p>
          </div>
        </div>

        <div className="carousel-item car">
          <img
            src="https://images.pexels.com/photos/29251136/pexels-photo-29251136.jpeg"
            className="d-block w-100 car"
            alt="Second slide"
          />
          <div className="carousel-caption">
            <h5 className='text-start'>Chose yours</h5>
            <p className='text-start'>More than a drink, it’s a vibe.</p>
          </div>
        </div>

        <div className="carousel-item car">
          <img
            src="https://images.pexels.com/photos/340996/pexels-photo-340996.jpeg"
            className="d-block w-100 car"
            alt="Third slide"
          />
          <div className="carousel-caption ">
            <h5 className='text-start'>Be Special</h5>
            <p className='text-start'>Where every sip feels special.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel
