import React from "react";
import { Link } from "react-router-dom";
import BrandsContainer from "../Home/Brands/BrandsContainer";
import Footer from "../Home/Footer/Footer";
import NavBar from "../Home/NavBar/NavBar";

const CategoriesBlog = () => {
    return (
        <>
            <NavBar />
            <section className='routes-section'>
                <article className='flex flex-wrap items-center justify-center font-thin md:text-lg'>
                    <Link to='/' className='routes__links'>
                        Home
                    </Link>
                    <span class='material-icons-outlined mx-2'>
                        keyboard_arrow_right
                    </span>
                    <Link to='/Blog' className='routes__links'>
                        Blog
                    </Link>
                    <span class='material-icons-outlined mx-2'>
                        keyboard_arrow_right
                    </span>
                    <Link to='/Blog/Category' className='routes__links'>
                        Category
                    </Link>
                    <span class='material-icons-outlined mx-2'>
                        keyboard_arrow_right
                    </span>
                    <Link
                        to='/Blog/Category/Uncategorized'
                        className='routes__links'>
                        Uncategorized
                    </Link>
                    {/* <span class='material-icons-outlined mx-2'>
                        keyboard_arrow_right
                    </span> */}
                    {/* <p>{name}</p> */}
                </article>
                {/* <h2 className='text-3xl text-black font-extrabold text-center mt-4'>
                    {name}
                </h2> */}
            </section>
            <BrandsContainer />
            <Footer />
        </>
    );
};

export default CategoriesBlog;
