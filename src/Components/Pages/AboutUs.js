import React from "react";
import { Link } from "react-router-dom";
import WhoWeAre from "../About/WhoWeAre";
import BrandsContainer from "../Home/Brands/BrandsContainer";
import Footer from "../Home/Footer/Footer";
import NavBar from "../Home/NavBar/NavBar";
// import AboutUsImg from "../../Assets/About_Us.png";

const AboutUs = () => {
    return (
        <>
            <NavBar />
            <section className='routes-section'>
                <article className='flex items-center justify-center font-thin md:text-lg'>
                    <p className='routes__links'>
                        <Link to='/'>Home</Link>
                    </p>
                    <span class='material-icons-outlined mx-2'>
                        keyboard_arrow_right
                    </span>
                    <p>About Us</p>
                </article>
                <h2 className='text-3xl text-black font-extrabold text-center mt-3'>
                    About Us
                </h2>
            </section>
            <WhoWeAre />
            <BrandsContainer />
            <Footer />
        </>
    );
};

export default AboutUs;
