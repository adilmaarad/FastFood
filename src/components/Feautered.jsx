import React from 'react'
import '../styles/feautered.css';
import plt1 from '../assets/images/plate1.jpg'
import plt2 from '../assets/images/plate2.jpg'
import plt3 from '../assets/images/plate3.jpg'
import plt4 from '../assets/images/plate4.jpg'
import plt5 from '../assets/images/plate5.jpg'
import plt6 from '../assets/images/plate6.jpg'
import { Link } from 'react-router-dom';
function Feautered() {
    return (
        <section className="feautered">
            <div className="max-width">
                <div className="container">
                    <div className="title1">FEATURED DISHES</div>
                    <div className="title2">The minutes that usually takes to deliver!</div>
                </div>
                <div className="cards">
                    <Link to="/detail" className='link'>
                        <div className="card">
                            <div className="img-container">
                                <img src={plt1} alt="" />
                            </div>
                            <div className="content">
                                <div className="title">Burger</div>
                                <div className="sauce"> Chicken, tommato, green salad, pita, ketchup, maionese, cucumber... </div>
                                <div className="price">$15.23</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/detail2" >
                        <div className="card">
                            <div className="img-container">
                                <img src={plt2} alt="" />
                            </div>
                            <div className="content">
                                <div className="title">Burger</div>
                                <div className="sauce"> Chicken, tommato, green salad, pita, ketchup, maionese, cucumber... </div>
                                <div className="price">$15.23</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/detail3" >
                        <div className="card">
                            <div className="img-container">
                                <img src={plt3} alt="" />
                            </div>
                            <div className="content">
                                <div className="title">Burger</div>
                                <div className="sauce"> Chicken, tommato, green salad, pita, ketchup, maionese, cucumber... </div>
                                <div className="price">$15.23</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/detail4">
                        <div className="card">
                            <div className="img-container">
                                <img src={plt4} alt="" />
                            </div>
                            <div className="content">
                                <div className="title">Burger</div>
                                <div className="sauce"> Chicken, tommato, green salad, pita, ketchup, maionese, cucumber... </div>
                                <div className="price">$15.23</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/detail5">
                        <div className="card">
                            <div className="img-container">
                                <img src={plt5} alt="" />
                            </div>
                            <div className="content">
                                <div className="title">Burger</div>
                                <div className="sauce"> Chicken, tommato, green salad, pita, ketchup, maionese, cucumber... </div>
                                <div className="price">$15.23</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/detail6">
                        <div className="card">
                            <div className="img-container">
                                <img src={plt6} alt="" />
                            </div>
                            <div className="content">
                                <div className="title">Burger</div>
                                <div className="sauce"> Chicken, tommato, green salad, pita, ketchup, maionese, cucumber... </div>
                                <div className="price">$15.23</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default Feautered;
