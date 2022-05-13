import PhloxLogo from "../../../Assets/Phlox_Logo.png";

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
                        <li className='my-2 cursor-pointer'>Home</li>
                        <li className='my-2 cursor-pointer'>About</li>
                        <li className='my-2 cursor-pointer'>Shop</li>
                        <li className='my-2 cursor-pointer'>Contact</li>
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
                <p className='font-bold text-lg'>Subscribe To Our Email</p>
                <form>
                    <label htmlFor='newsletter'>
                        For Latest News & Updates
                    </label>
                    <div>
                        <input
                            type='text'
                            id='newsletter'
                            placeholder='Enter your Email'
                        />
                        <button>Subscribe</button>
                    </div>
                </form>
            </section>
        </footer>
    );
};

export default Footer;
