import React from 'react'
import '../styles/Pub.css'
import imgPub from '../assets/images/image-inner-bg1.png'

function Pub() {
    return (
        <section className="pub">
            <div className="max-width">
                <div className="container">
                    <div className="content">
                        <div className="title1">
                            Happy Sunday
                        </div>
                        <div className="title2">
                            40% off All premium pizzas
                        </div>
                        <img src={imgPub} alt="" />
                        <div className="btns">
                            <button>
                                CHECK THE DEAL
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pub
