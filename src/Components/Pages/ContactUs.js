import React from "react";
import { Link } from "react-router-dom";
import ContactSection from "../Contact_Section/ContactSection";
import BrandsContainer from "../Home/Brands/BrandsContainer";
import Footer from "../Home/Footer/Footer";
import NavBar from "../Home/NavBar/NavBar";

const ContactUs = () => {
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
                    <p>Contact Us</p>
                </article>
                <h2 className='text-3xl text-black font-extrabold text-center mt-3'>
                    Contact Us
                </h2>
            </section>
            <ContactSection />
            <BrandsContainer />
            <Footer />
        </>
    );
};

export default ContactUs;
