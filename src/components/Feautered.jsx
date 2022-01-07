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
                                <div className="title">Hot Dogs New York</div>
                                <div className="sauce"> Spicy, but not hot. Served Chicago Style. The polish sausage is made with both pork and beef.... </div>
                                <div className="price">$09.23</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/detail2" >
                        <div className="card">
                            <div className="img-container">
                                <img src={plt2} alt="" />
                            </div>
                            <div className="content">
                                <div className="title">Chicken fried</div>
                                <div className="sauce"> Our famous fries covered in melted cheddar cheese.... </div>
                                <div className="price">$07.23</div>
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
                                <div className="sauce"> Two grilled burgers served with two slices of American cheese, Matt's burger sauce, onions, lettuce, and tomatoes.... </div>
                                <div className="price">$11.23</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/detail4">
                        <div className="card">
                            <div className="img-container">
                                <img src={plt4} alt="" />
                            </div>
                            <div className="content">
                                <div className="title">Feijoada classique</div>
                                <div className="sauce">tommato, green salad, pita, ketchup, maionese, cucumber... </div>
                                <div className="price">$12.23</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/detail5">
                        <div className="card">
                            <div className="img-container">
                                <img src={plt5} alt="" />
                            </div>
                            <div className="content">
                                <div className="title">Chicago Dog</div>
                                <div className="sauce"> Mustard, diced white onions, sweet relish, tomatoes, Kosher dill pickle, sport (hot) pepper, and celery salt.... </div>
                                <div className="price">$09.03</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/detail6">
                        <div className="card">
                            <div className="img-container">
                                <img src={plt6} alt="" />
                            </div>
                            <div className="content">
                                <div className="title">Double Burger</div>
                                <div className="sauce"> Two grilled burgers served with Matt's burger sauce, onions, lettuce, and tomatoes.... </div>
                                <div className="price">$10.23</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default Feautered;
