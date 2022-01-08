import React from 'react'
import '../styles/delivery.css'
import imgdel from '../assets/images/image-inner-bg2.png'

function Delivery() {
    return (
        <section className="delivery">
            <div className="max-width">
                <div className="container">
                    <div className="content">
                    <img src={imgdel} alt="" />
                        <div className="title1">
                        30 MINUTES <br/> DELIVERY!
                        </div>
                        <div className="title2">
                        If you're having a meeting, working late at night and need an extra <br/> push. Let us know and we will be there
                        </div>
                        <div className="btns">
                            <button>
                                Make An Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Delivery;
