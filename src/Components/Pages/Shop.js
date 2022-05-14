import React from "react";
import { Link } from "react-router-dom";
import BrandsContainer from "../Home/Brands/BrandsContainer";
import Footer from "../Home/Footer/Footer";
import NavBar from "../Home/NavBar/NavBar";

const Shop = () => {
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
                    <p>Products</p>
                </article>
                <h2 className='md:text-3xl text-2xl text-black font-extrabold text-center mt-3'>
                    Products
                </h2>
            </section>
            <BrandsContainer />
            <Footer />
        </section>
    );
};

export default Shop;
