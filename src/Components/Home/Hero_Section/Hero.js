import { useNavigate } from "react-router-dom";
import HeroImage from "../../../Assets/Hero_Image.png";
import "./Hero.css";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className='heroSection relative overflow-hidden my-2'>
            <p className='md:text-4xl text-xl font-medium sanTitle'>
                Beats Solo
            </p>
            <h2 className='md:text-7xl text-4xl font-bold erTitle'>Wireless</h2>
            <h1 className='font-extrabold title'>Headphones</h1>
            <figure className='absolute md:-top-28 top-7 md:-right-36 md:left-0 left-10 md:scale-75'>
                <img
                    className='lg:right-0 -right-7 lg:top-0 md:top-32 -top-2 relative'
                    src={HeroImage}
                    alt='Headphones'
                />
            </figure>
            <section className='md:mt-8 mt-6 flex justify-between items-start'>
                <button
                    className='capitalize heroBtn'
                    onClick={() => navigate("/Shop")}>
                    <span className='overlay'></span>
                    <span>Shop by category</span>
                </button>
                <div className='md:block hidden lg:w-1/4 md:w-1/2 pr-16'>
                    <p className='text-right font-bold'>Description</p>
                    <p className='text-right pt-3'>
                        There are many variations passages of Lorem Ipsum
                        available, but the majority have suffered alteration
                    </p>
                </div>
            </section>
        </section>
    );
};

export default Hero;
