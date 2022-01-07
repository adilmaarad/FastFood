import React from 'react'
import b1 from '../assets/images/product-02.jpg'
import b2 from '../assets/images/plate2.jpg'
import b3 from '../assets/images/plate3.jpg'
import b4 from '../assets/images/plate4.jpg'
import b5 from '../assets/images/plate5.jpg'
import b6 from '../assets/images/plate6.jpg'
import b7 from '../assets/images/pizza1.jpg'
import b8 from '../assets/images/pizza2.jpg'
import b9 from '../assets/images/pizza3.jpg'
import b10 from '../assets/images/pizza4.jpg'
import Payment from '../assets/images/payment.png'
import Navbar from './Navbar';
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import '../styles/detailstyle.css';
function DetailPage(props) {

    var image = b1;
    if (props.image == "1") {
        image = b1;
    } else if (props.image == "2") {
        image = b2;
    }
    else if (props.image == "3") {
        image = b3;
    }
    else if (props.image == "4") {
        image = b4;
    }
    else if (props.image == "5") {
        image = b5;
    }
    else if (props.image == "6") {
        image = b6;
    }
    else if (props.image == "7") {
        image = b7;
    }
    else if (props.image == "8") {
        image = b8;
    }
    else if (props.image == "9") {
        image = b9;
    }
    else if (props.image == "10") {
        image = b10;
    }

    return (
        <section className="detail">
            <Navbar />
            <div className="detail-container">
                <div className="left">
                    <div className="img-container">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="title">{props.title}</div>
                    <div className="sauce">{props.sauce}</div>
                    <div className="price">{props.price}</div>
                    <div className="size">Size : <span>XL</span> <span>L</span> <span>M</span> <span>S</span> </div>
                    <button> Add to cart</button>
                    <hr />
                    <div className="sku">SKU: N/A</div>
                    <div className="ctg">Categories: Drinks, Fast Food, Fries, Most popular, Pizza, Salads, Sandwich, Spaghetti</div>
                    <div className="tags">Tags: Burgers, Tacos</div>
                    <hr />
                    <div className='img-payment'>
                        Payment :
                        <img src={Payment} alt="" />
                    </div>
                    <div className="share-on">
                        Share :
                        <FontAwesomeIcon icon={faFacebook} className="facebook"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faInstagram} className="instgrame"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTwitter} className="twitter"></FontAwesomeIcon>

                    </div>

                </div>
            </div>
            <Footer />
        </section>

    )
}

export default DetailPage
