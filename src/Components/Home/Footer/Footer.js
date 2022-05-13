import { Link } from "react-router-dom";
import PhloxLogo from "../../../Assets/Phlox_Logo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className='py-16 lg:px-8 md:px-5 px-3 flex flex-wrap justify-evenly items-start w-full'>
            <figure className='md:w-1/5'>
                <img src={PhloxLogo} alt='Phlox Logo' />
                <figcaption className='mt-8'>
                    <p>
                        There are many variations passages of Lorem Ipsum
                        available, but the majority have
                    </p>
                    <div className='mt-6'>
                        <i className='fa-brands fa-instagram md:text-2xl text-xl cursor-pointer hover:opacity-75 px-2.5 py-1'></i>
                        <i className='fa-brands fa-linkedin-in md:text-2xl text-xl cursor-pointer hover:opacity-75 px-2.5 py-1'></i>
                        <i className='fa-brands fa-facebook-f md:text-2xl text-xl cursor-pointer hover:opacity-75 px-2.5 py-1'></i>
                        <i className='fa-brands fa-twitter md:text-2xl text-xl cursor-pointer hover:opacity-75 px-2.5 py-1'></i>
                    </div>
                </figcaption>
            </figure>
            <section className='md:w-1/6 flex flex-col justify-center items-center'>
                <p className='text-lg font-bold mb-4'>Quick Links</p>
                <nav>
                    <ul>
                        <li className='my-2 cursor-pointer'>
                            {/* <a href='#' className='footer__links'>
                                Home
                            </a> */}
                            <Link to='/' className='footer_links'>
                                Home
                            </Link>
                        </li>
                        <li className='my-2 cursor-pointer'>
                            <Link to='/About-us' className='footer__links'>
                                About
                            </Link>
                        </li>
                        <li className='my-2 cursor-pointer'>
                            <Link to='/Shop' className='footer__links'>
                                Shop
                            </Link>
                        </li>
                        <li className='my-2 cursor-pointer'>
                            <Link to='/Contact-us' className='footer__links'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className='md:w-1/5'>
                <p className='text-lg font-bold mb-6'>Contact</p>
                <p>
                    +99 (0) 101 0000 888 Patricia C. Amedee 4401 Waldeck Street
                    Grapevine Nashville, Tx 76051
                </p>
            </section>
            <section className='md:w-2/5'>
                <p className='font-bold text-lg mb-4'>Subscribe To Our Email</p>
                <form className='md:pl-6 pl-0'>
                    <label htmlFor='newsletter' className='font-bold text-2xl'>
                        For Latest News & Updates
                    </label>
                    <div className='relative mt-3 flex items-center w-4/5'>
                        <input
                            type='text'
                            id='newsletter'
                            placeholder='Enter your Email'
                            className='w-full border rounded-full pl-6 pr-8 py-3 focus:outline-none'
                            style={{
                                backgroundColor: "transparent",
                                backgroundImage:
                                    "linear-gradient(-105deg, #dcdcdc 54%, #eee 68%)",
                            }}
                        />
                        <button
                            className='absolute right-1 py-2 border px-7 rounded-full text-white'
                            style={{
                                backgroundColor: "transparent",
                                backgroundImage:
                                    "linear-gradient(-90deg, #f42c37 61%, #ff4e59 100%)",
                            }}>
                            Subscribe
                        </button>
                    </div>
                </form>
            </section>
        </footer>
    );
};

export default Footer;
