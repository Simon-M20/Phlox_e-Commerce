import Earphones from "../../../Assets/Main_Products/Earphones.png";
import YellowWatch from "../../../Assets/Main_Products/Yellow-watch.png";
import LaptopImg from "../../../Assets/Main_Products/Laptop.png";
import PlayStation from "../../../Assets/Main_Products/PS4.png";
import GameVr from "../../../Assets/Main_Products/VR-man.png";
import AmazonSpeaker from "../../../Assets/Main_Products/Alexa-Amazon.png";
import DeliveryIcon from "../../../Assets/SVG_Icons/Delivery-Icon.svg";
import MoneyIcon from "../../../Assets/SVG_Icons/Guarantee-Icon.svg";
import HeadphonesIcon from "../../../Assets/SVG_Icons/Headphones-Icon.svg";
import WalletIcon from "../../../Assets/SVG_Icons/Wallet-Icon.svg";

import "./MainProducts.css";
import { useNavigate } from "react-router-dom";

const MainProducts = () => {
    const navigate = useNavigate();
    return (
        <main className='my-6'>
            <section className='flex flex-wrap items-start justify-center w-full'>
                <section className='earSection'>
                    <figure className='earCard relative overflow-hidden'>
                        <div className='absolute md:right-0 right-4 z-10'>
                            <img
                                className='scale-110 relative -left-9 -top-3'
                                src={Earphones}
                                alt='Earphones'
                            />
                        </div>
                        <figcaption className='text-white z-20 flex flex-col justify-start items-start pt-28 md:pl-8 pl-10'>
                            <h6 className='tracking-tighter'>Enjoy</h6>
                            <h3 className='text-3xl font-bold tracking-tight'>
                                With
                            </h3>
                            <p className='earTitle'>Earphone</p>
                            <button
                                className='earBtn mt-5'
                                onClick={() => navigate("/Shop")}>
                                <span className='earOverlay'></span>
                                <span>Browse</span>
                            </button>
                        </figcaption>
                    </figure>
                </section>

                <section className='wacthSection'>
                    <figure className='watchCard relative overflow-hidden'>
                        <div className='absolute -right-24 z-10'>
                            <img src={YellowWatch} alt='Yellow Watch' />
                        </div>
                        <figcaption className='text-white z-20 flex flex-col justify-start items-start pt-28 md:pl-8 pl-10'>
                            <h6 className='tracking-tighter'>Enjoy</h6>
                            <h3 className='text-3xl font-bold tracking-tight'>
                                Wear
                            </h3>
                            <p className='watchTitle'>Gadgets</p>
                            <button
                                className='watchBtn mt-5'
                                onClick={() => navigate("/Shop")}>
                                <span className='watchOverlay'></span>
                                <span>Browse</span>
                            </button>
                        </figcaption>
                    </figure>
                </section>

                <section className='laptopSection'>
                    <figure className='laptopCard relative'>
                        <div className='absolute md:right-4 -right-14 z-10 -top-5 md:scale-100 scale-75'>
                            <img src={LaptopImg} alt='Laptop Img' />
                        </div>
                        <figcaption className='text-white z-20 flex flex-col justify-start items-start pt-28 md:pl-16 pl-8'>
                            <h6 className='tracking-tighter'>Trend</h6>
                            <h3 className='text-3xl font-bold tracking-tight'>
                                Devices
                            </h3>
                            <p className='laptopTitle'>Laptop</p>
                            <button
                                className='laptopBtn mt-5'
                                onClick={() => navigate("/Shop")}>
                                <span className='laptopOverlay'></span>
                                <span>Browse</span>
                            </button>
                        </figcaption>
                    </figure>
                </section>
            </section>

            <section className='flex flex-wrap items-start justify-center w-full'>
                <section className='playSection'>
                    <figure className='playCard relative overflow-hidden'>
                        <div className='absolute xl:-top-4 xl:-right-24 md:-right-4 right-6 md:-top-32 top-4 scale-75'>
                            <img
                                className='relative md:-right-44 -right-28 xl:-top-28 md:top-12 top-14 scale-75'
                                src={PlayStation}
                                alt='Play Station 4'
                            />
                        </div>
                        <figcaption className='pt-12 md:pl-14 pl-8'>
                            <h6 className='tracking-tighter'>Best</h6>
                            <h3 className='text-black font-bold text-3xl'>
                                Gaming
                            </h3>
                            <p className='playTitle'>Console</p>
                            <button
                                className='playBtn mt-5'
                                onClick={() => navigate("/Shop")}>
                                <span className='playOverlay'></span>
                                <span>Browse</span>
                            </button>
                        </figcaption>
                    </figure>
                </section>

                <section className='gameSection'>
                    <figure className='gameCard relative overflow-hidden'>
                        <div className='absolute -bottom-6 -right-8'>
                            <img
                                className='scale-90 '
                                src={GameVr}
                                alt='Virtual Game'
                            />
                        </div>
                        <figcaption className='text-white z-20 flex flex-col justify-start items-start pt-8 pl-8'>
                            <h6 className='tracking-tighter'>Play</h6>
                            <h3 className='tracking-tight font-bold text-3xl'>
                                Game
                            </h3>
                            <p className='gameTitle'>Oculus</p>
                            <button
                                className='gameBtn mt-5'
                                onClick={() => navigate("/Shop")}>
                                <span className='gameOverlay'></span>
                                <span>Browse</span>
                            </button>
                        </figcaption>
                    </figure>
                </section>

                <section className='speakerSection'>
                    <figure className='speakerCard relative overflow-hidden'>
                        <div className='absolute -right-10 -bottom-2 rotate-45'>
                            <img
                                className='scale-90'
                                src={AmazonSpeaker}
                                alt='Alexa Amazon Speaker'
                            />
                        </div>
                        <figcaption className='text-white z-20 flex flex-col justify-start items-start pt-8 pl-8'>
                            <h6 className='tracking-tighter'>New</h6>
                            <h3 className='font-bold text-3xl tracking-tight'>
                                Amazon
                            </h3>
                            <p className='speakerTitle'>Speaker</p>
                            <button
                                className='speakerBtn mt-5'
                                onClick={() => navigate("/Shop")}>
                                <span className='speakerOverlay'></span>
                                <span>Browse</span>
                            </button>
                        </figcaption>
                    </figure>
                </section>
            </section>

            <section className='flex flex-wrap justify-between items-start w-full mt-8'>
                <article className='md:w-1/2 w-full flex justify-around items-center md:mt-4 mt-8'>
                    <figure className='flex md:flex-row flex-col md:items-start items-center'>
                        <img
                            className='md:w-auto w-1/3'
                            src={DeliveryIcon}
                            alt='Delivery Icon'
                        />
                        <figcaption className='md:ml-3 md:mt-0 mt-4 ml-0'>
                            <p className='font-bold text-lg capitalize'>
                                Free shipping
                            </p>
                            <p className='text-gray-400 font-thin capitalize py-1'>
                                Free Shipping On All Order
                            </p>
                        </figcaption>
                    </figure>
                    <figure className='flex md:flex-row flex-col md:items-start items-center'>
                        <img
                            className='md:w-auto w-1/3'
                            src={MoneyIcon}
                            alt='Guarantee Icon'
                        />
                        <figcaption className='md:ml-3 md:mt-0 mt-4 ml-0'>
                            <p className='font-bold text-lg capitalize'>
                                Money Guarantee
                            </p>
                            <p className='text-gray-400 font-thin capitalize'>
                                30 Day Money Back
                            </p>
                        </figcaption>
                    </figure>
                </article>
                <article className='md:w-1/2 w-full flex justify-around items-center md:mt-4 mt-8'>
                    <figure className='flex md:flex-row flex-col md:items-start items-center'>
                        <img
                            className='md:w-auto w-1/3'
                            src={HeadphonesIcon}
                            alt='Headphones Icon'
                        />
                        <figcaption className='md:ml-3 md:mt-0 mt-4 ml-0'>
                            <p className='font-bold text-lg capitalize'>
                                Online Support 24/7
                            </p>
                            <p className='text-gray-400 font-thin capitalize'>
                                Technical Support 24/7
                            </p>
                        </figcaption>
                    </figure>
                    <figure className='flex md:flex-row flex-col md:items-start items-center'>
                        <img
                            className='md:w-auto w-1/3'
                            src={WalletIcon}
                            alt='Wallet Icon'
                        />
                        <figcaption className='md:ml-3 md:mt-0 mt-4 ml-0'>
                            <p className='font-bold text-lg capitalize'>
                                Secure payment
                            </p>
                            <p className='text-gray-400 font-thin capitalize'>
                                All cards accepted
                            </p>
                        </figcaption>
                    </figure>
                </article>
            </section>
        </main>
    );
};

export default MainProducts;
