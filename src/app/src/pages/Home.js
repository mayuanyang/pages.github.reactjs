import React, { Component } from 'react';
import Header from '../components/Header'
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home container">
                <Header />
                <h3>I am a passionate developer want to learn everything</h3>
                <p className="about-me-description">
                    I love programming, i do it at work as well as my spare time
                </p>
            </div>
        );
    }
}

export default Home;
