import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import Wraper from './Wraper';
import About from './About';
import Feautered from './Feautered';
import Pub from './Pub';
import Pizza from './Pizza';
import Delivery from './Delivery';
import Footer from './Footer';

function HomePage() {
    return (
        <div>
            <Navbar />
            <Home />
            <Wraper />
            <About />
            <Feautered />
            <Pub />
            <Pizza />
            <Delivery />
            <Footer />
        </div>
    )
}

export default HomePage
