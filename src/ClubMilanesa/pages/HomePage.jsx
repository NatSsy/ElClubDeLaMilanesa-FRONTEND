import React from 'react'
import mila1 from "../../assets/img/carrusel/mila1.jpg"
import mila2 from "../../assets/img/carrusel/mila2.jpg"
import mila3 from "../../assets/img/carrusel/mila3.jpg"

export const HomePage = () => {
    return (
        <div>
            <div>
                <div id="carouselPageCDLM" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselPageCDLM" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselPageCDLM" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner carousel-mila">
                        <div class="carousel-item active">
                            <img className='d-block w-100 mila' src={mila1} alt="" />
                        </div>
                        <div class="carousel-item">
                            <img className='d-block w-100 mila' src={mila2} alt="" />
                        </div>
                        <div class="carousel-item">
                            <img className='d-block w-100 mila' src={mila3} alt="" />
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselPageCDLM" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselPageCDLM" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
