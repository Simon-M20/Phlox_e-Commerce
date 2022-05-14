import React from "react";
import { Link } from "react-router-dom";
import BrandsContainer from "../Home/Brands/BrandsContainer";
import Footer from "../Home/Footer/Footer";
import NavBar from "../Home/NavBar/NavBar";
import NotFoundImg from "../../Assets/SVG_Icons/404.svg";

const Error404 = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Sending pruck pruck prack");
    };

    return (
        <section>
            <NavBar />
            <section className='md:px-10 px-4 md:pt-44 pt-20 md:pb-20 pb-16'>
                <h1 className='lg:text-9xl text-8xl font-bold'>404</h1>
                <figure className='flex items-center mt-3'>
                    <img src={NotFoundImg} alt='Error 404 Not Found' />
                    <figcaption className='ml-4'>
                        <h2 className='text-4xl capitalize font-medium'>
                            Oops! page not found
                        </h2>
                    </figcaption>
                </figure>
                <p className='font-thin mt-2 text-justify'>
                    It seems we can’t find what you’re looking for. Perhaps
                    searching can help.
                </p>
                <form
                    className='my-5 relative md:w-1/3 w-full flex items-center'
                    onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Search'
                        className='w-full border rounded-xl pl-6 py-3 focus:outline-none'
                    />
                    <span className='material-icons-outlined absolute right-3'>
                        search
                    </span>
                </form>
                <Link to='/' className='flex items-center ml-4'>
                    <span class='material-icons-outlined mr-4'>
                        keyboard_backspace
                    </span>
                    <span>Bring me back home</span>
                </Link>
            </section>
            <BrandsContainer />
            <Footer />
        </section>
    );
};

export default Error404;
