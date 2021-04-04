import React from 'react'


const Hero = (props) =>{
    const {handleLogout} = props;
    return(
        <section className="hero">
            <nav>
                <h2>
                    Welcome
                </h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <h2>You have logged in successfully.</h2>
        </section>
    )
}

export default Hero