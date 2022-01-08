import React from 'react'
import '../styles/home.css';
function Home() {
    return (
        <section className="home">
            <div className="max-width">
                <div className="container">
                    <div className="text">
                        <div className="text1">DELICIOUS!</div>
                        <div className="text2">Best offer that never bites your wallet</div>
                    </div>
                    <button className="order"> Order New</button>
                </div>
            </div>
        </section>
    )
}

export default Home;
