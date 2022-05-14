import React from "react";
import { Link } from "react-router-dom";
import WhoWeAre from "../About/WhoWeAre";
import BrandsContainer from "../Home/Brands/BrandsContainer";
import Footer from "../Home/Footer/Footer";
import NavBar from "../Home/NavBar/NavBar";
// import AboutUsImg from "../../Assets/About_Us.png";

const AboutUs = () => {
    return (
        <section>
            <NavBar />
            <section className='routes-section'>
                <article className='flex items-center justify-center font-thin md:text-lg'>
                    <p className='hover:opacity-75'>
                        <Link to='/'>Home</Link>
                    </p>
                    <span class='material-icons-outlined mx-2'>
                        keyboard_arrow_right
                    </span>
                    <p>About Us</p>
                </article>
                <h2 className='md:text-3xl text-2xl text-black font-extrabold text-center mt-3'>
                    About Us
                </h2>
            </section>
            <WhoWeAre />
            <BrandsContainer />
            <Footer />
        </section>
    );
};

export default AboutUs;
