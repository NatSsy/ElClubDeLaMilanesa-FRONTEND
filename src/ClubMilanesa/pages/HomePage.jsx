import React from 'react'
import mila1 from "../../assets/img/carrusel/mila1.jpg"
import mila2 from "../../assets/img/carrusel/mila2.jpg"
import mila3 from "../../assets/img/carrusel/mila3.jpg"
import mila4 from "../../assets/img/carrusel/mila4.jpg"


export const HomePage = () => {
    return (
        <div>
            <div>
                <div id="carouselPageCDLM" className="carousel slide carouselCDLM">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselPageCDLM" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
                        </button>

                        <button type="button" data-bs-target="#carouselPageCDLM" data-bs-slide-to="1" aria-label="Slide 2">
                        </button>

                        <button type="button" data-bs-target="#carouselPageCDLM" data-bs-slide-to="2" aria-label="Slide 3">
                        </button>

                        <button type="button" data-bs-target="#carouselPageCDLM" data-bs-slide-to="3" aria-label="Slide 3">
                        </button>
                    </div>
                    <div className="carousel-inner carousel-mila container-fluid p-5">
                        <div class="carousel-item active">
                            <img className='d-block w-100 ' src={mila1} alt="" />
                        </div>
                        <div class="carousel-item">
                            <img className='d-block w-100 ' src={mila2} alt="" />
                        </div>
                        <div class="carousel-item">
                            <img className='d-block w-100 ' src={mila3} alt="" />
                        </div>
                        <div class="carousel-item">
                            <img className='d-block w-100 ' src={mila4} alt="" />
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
            <div className='container card-CDLM p-5'>
                <div className="card">
                <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card">
                <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card">
                <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
