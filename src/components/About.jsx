import React from 'react'
import '../styles/about.css';
import images from '../assets/images/bg-iconbox.png'
import images1 from '../assets/images/img_iconbox-1.1.png'
import images2 from '../assets/images/img_iconbox-1.2.png'
import images3 from '../assets/images/img_iconbox-1.3.png'
function About() {
    return (
        <section className="about">
            <div className="max-width">
                <div className="container">
                    <div className="background">
                        <div className="cards">
                            <div className="card">
                                <div className="img">
                                    <div className="image-container">
                                        <img src={images1} alt="" />
                                    </div>
                                    
                                    <div className="title">Choose</div>
                                    <div className="text">Browse hundreds of menus to find the food</div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img">
                                <div className="image-container">
                                        <img src={images2} alt="" />
                                    </div>
                                    <div className="title">Pay</div>
                                    <div className="text">Pay fast & secure online or on delivery</div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img">
                                <div className="image-container">
                                        <img src={images3} alt="" />
                                    </div>
                                    <div className="title">Enjoy</div>
                                    <div className="text">Food is prepared & delivered to your door</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About;
