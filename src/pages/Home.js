import React from 'react';
import './styles/home.css'

const Home = () => {


    return (
        <div style={{ textAlign: 'center' }}>
            <img src={`${process.env.PUBLIC_URL}/img2.jpeg`} alt="Descriptive Alt Text" className="img-style" />
            <div>
                <button className="button-style" onClick={() => {/* Functionality for Sign Up */}}>Sign Up</button>
                <button className="button-style" onClick={() => {/* Functionality for Login */}}>Login</button>
            </div>
        </div>


    );
};

export default Home;
