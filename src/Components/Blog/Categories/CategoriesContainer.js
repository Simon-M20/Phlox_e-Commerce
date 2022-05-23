import React, { useState } from "react";
import { Link } from "react-router-dom";
import BrandsContainer from "../../Home/Brands/BrandsContainer";
import Footer from "../../Home/Footer/Footer";
import NavBar from "../../Home/NavBar/NavBar";
import Categories from "./Categories";
import CategoriesBlog from "./CategoriesBlog";

const CategoriesContainer = () => {
    const [activeCategory, setActiveCategory] = useState(null);
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
                </article>
            </section>
            <main className='flex justify-center items-start'>
                <CategoriesBlog activeCategory={activeCategory} />
                <Categories setActiveCategory={setActiveCategory} />
            </main>
            <BrandsContainer />
            <Footer />
        </>
    );
};

export default CategoriesContainer;
