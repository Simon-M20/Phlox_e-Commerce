import React from "react";
import { useNavigate } from "react-router-dom";
import AboutUsImg from "../../Assets/About_Us.png";
import "./WhoWeAre.css";

const WhoWeAre = () => {
    const navigate = useNavigate();

    const stylesImg = {
        borderRadius: "25px 25px 25px 25px",
        overflow: "hidden",
        boxShadow: "0px 10px 50px 0px #d1d5df",
    };

    return (
        <section className='flex flex-wrap md:justify-between justify-center items-center w-full md:px-10 px-2 py-32'>
            <article className='md:w-2/5 w-full'>
                <p
                    className='capitalize font-semibold'
                    style={{ color: "#f42c37" }}>
                    Welcome to phlox
                </p>
                <h1 className='text-black mt-2 mb-6 md:text-5xl text-3xl font-bold capitalize'>
                    Who we are?
                </h1>
                <p className='py-2 text-justify'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora molestiae tempore cupiditate minima maiores illum
                    qui iusto culpa eius, officiis, suscipit officia impedit
                    nemo ipsam mollitia velit totam ducimus. Aut?
                </p>
                <p className='py-4 text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium, consequatur repellendus beatae quasi voluptates
                    consectetur maxime rerum mollitia autem corporis dolores
                    tempora eos error labore, magni laboriosam. Obcaecati, ipsum
                    laborum minima impedit odit sint. Est iusto quod nemo
                    recusandae! Neque delectus mollitia error, tenetur
                    voluptatibus in corporis saepe, exercitationem quia sint
                    veritatis doloribus illo, quos vero dolorem explicabo vitae.
                    Quasi?
                </p>
                <button
                    className='aboutBtn'
                    onClick={() => navigate("/Contact-us")}>
                    <span className='aboutBtn-overlay'></span>
                    <span>Contact Us</span>
                </button>
            </article>
            <article className='md:w-1/2 md:mt-0 mt-14'>
                <figure className='about__img' style={stylesImg}>
                    <img src={AboutUsImg} alt='About Us' />
                </figure>
            </article>
        </section>
    );
};

export default WhoWeAre;
