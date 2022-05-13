import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer/Footer";
import NavBar from "../Home/NavBar/NavBar";

const ContactUs = () => {
    return (
        <section>
            <NavBar />
            <section className='routes-section'>
                <article className='flex items-center justify-center font-thin md:text-lg'>
                    <p className='hover:opacity-75'>
                        <Link to='/'>Home</Link>
                    </p>
                    <span class='material-icons-outlined mx-2'>
                        keyboard_double_arrow_right
                    </span>
                    <p>Contact Us</p>
                </article>
                <h2 className='md:text-3xl text-2xl text-black font-extrabold text-center mt-3'>
                    Contact Us
                </h2>
            </section>
            <Footer />
        </section>
    );
};

export default ContactUs;
