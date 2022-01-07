import React from 'react'
import '../styles/wraper.css';
import images1 from '../assets/images/h1-bn1.jpg'
import images2 from '../assets/images/h1-bn2.jpg'
function Wraper() {
    return (
        <section className="wraper">
            <div className="max-width">
                <div className="container">
                    <div className="wraper-img">
                        <div className="image1">
                            <div className="content">
                                <div className="text1">Hot <span>Burger</span> <br/>  Cool Price</div>
                                <div className="price">Start at $3.50</div>
                                <button>Order new</button>
                            </div>

                        </div>
                        <div className="image2">
                            <div className="content">
                                <div className="text2">Discovery New <br/>  <span>Menu</span> </div>
                                <div className="price">Start at $2.32</div>
                                <button>Order new</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Wraper;
