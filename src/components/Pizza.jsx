import React from 'react'
import '../styles/pizza.css'
import pz1 from '../assets/images/pizza1.jpg'
import pz2 from '../assets/images/pizza2.jpg'
import pz3 from '../assets/images/pizza3.jpg'
import pz4 from '../assets/images/pizza4.jpg'
import { Link } from 'react-router-dom';
function Pizza() {
    return (
        <section className="pizza">
            <div className="max-width">
                <div className="container">
                    <div className="title">Pizza</div>
                </div>
                <div className="cards">
                    <Link to="/detail7">
                        <div className="card">
                            <div className="img-pizza">
                                <img src={pz1} alt="" />
                            </div>
                            <div className="text">
                                <div className="title">Mexican pile</div>
                                <div className="price">$3.30</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/detail8">
                        <div className="card">
                            <div className="img-pizza">
                                <img src={pz2} alt="" />
                            </div>
                            <div className="text">
                                <div className="title">Mexican pile</div>
                                <div className="price">$2.30</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/detail9">
                        <div className="card">
                            <div className="img-pizza">
                                <img src={pz3} alt="" />
                            </div>
                            <div className="text">
                                <div className="title">Mexican pile</div>
                                <div className="price">$4.30</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/detail10">
                        <div className="card">
                            <div className="img-pizza">
                                <img src={pz4} alt="" />
                            </div>
                            <div className="text">
                                <div className="title">Mexican pile</div>
                                <div className="price">$10.30</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Pizza;
