import { Link } from "react-router-dom";
import PhloxLogo from "../../../Assets/Phlox_Logo.png";
import "./Footer.css";

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Dandote pruck pruck prack");
    };

    return (
        <footer>
            <section className='py-16 lg:px-8 md:px-5 px-3 flex flex-wrap justify-evenly items-start w-full'>
                <figure className='md:w-1/5'>
                    <Link to='/'>
                        <img src={PhloxLogo} alt='Phlox Logo' />
                    </Link>
                    <figcaption className='mt-8'>
                        <p>
                            There are many variations passages of Lorem Ipsum
                            available, but the majority have
                        </p>
                        <div className='md:mt-6 mt-3'>
                            <i className='fa-brands fa-instagram md:text-2xl text-xl cursor-pointer hover:opacity-75 px-2.5 py-1'></i>
                            <i className='fa-brands fa-linkedin-in md:text-2xl text-xl cursor-pointer hover:opacity-75 px-2.5 py-1'></i>
                            <i className='fa-brands fa-facebook-f md:text-2xl text-xl cursor-pointer hover:opacity-75 px-2.5 py-1'></i>
                            <i className='fa-brands fa-twitter md:text-2xl text-xl cursor-pointer hover:opacity-75 px-2.5 py-1'></i>
                        </div>
                    </figcaption>
                </figure>
                <section className='md:w-1/6 w-full flex flex-col md:justify-center justify-start md:items-center items-start md:mt-0 mt-4'>
                    <p className='text-lg font-bold mb-4'>Quick Links</p>
                    <nav>
                        <ul>
                            <li className='my-2 cursor-pointer'>
                                {/* <a href='#' className='footer__links'>
                                Home
                            </a> */}
                                <Link to='/' className='footer__links'>
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
                                <Link
                                    to='/Contact-us'
                                    className='footer__links'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section className='md:w-1/5 w-full md:mt-0 mt-4'>
                    <p className='text-lg font-bold md:mb-6 mb-4'>Contact</p>
                    <p>
                        +99 (0) 101 0000 888 Patricia C. Amedee 4401 Waldeck
                        Street Grapevine Nashville, Tx 76051
                    </p>
                </section>
                <section className='md:w-2/5 w-full mt-6 md:mt-0'>
                    <p className='font-bold text-lg md:mb-4 mb-2'>
                        Subscribe To Our Email
                    </p>
                    <form className='md:pl-6 pl-0' onSubmit={handleSubmit}>
                        <label
                            htmlFor='newsletter'
                            className='font-bold md:text-2xl text-xl'>
                            For Latest News & Updates
                        </label>
                        <div className='relative mt-3 flex items-center md:w-4/5 w-full'>
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
            </section>
            <section>
                <article>
                    <p>© 2022 Phlox All rights reserved.</p>
                </article>
                <article></article>
            </section>
        </footer>
    );
};

export default Footer;
