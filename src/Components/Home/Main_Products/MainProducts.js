import Earphones from "../../../Assets/Main_Products/Earphones.png";
import YellowWatch from "../../../Assets/Main_Products/Yellow-watch.png";
import LaptopImg from "../../../Assets/Main_Products/Laptop.png";
import PlayStation from "../../../Assets/Main_Products/PS4.png";

import "./MainProducts.css";

const MainProducts = () => {
    return (
        <main className='my-6 '>
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
                            <button className='earBtn mt-5'>
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
                            <button className='watchBtn mt-5'>
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
                            <button className='laptopBtn mt-5'>
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
                            <h6>Best</h6>
                            <h3 className='text-black font-bold text-3xl'>
                                Gaming
                            </h3>
                            <p className='playTitle'>Console</p>
                            <button className='playBtn mt-5'>
                                <span className='playOverlay'></span>
                                <span>Browse</span>
                            </button>
                        </figcaption>
                    </figure>
                </section>
                <section className='gameSection'></section>
                <section className='speakerSection'></section>
            </section>
        </main>
    );
};

export default MainProducts;
