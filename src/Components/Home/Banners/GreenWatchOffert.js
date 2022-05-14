import { useNavigate } from "react-router-dom";
import GreenWatch from "../../../Assets/Products/Green-smarthWatch.png";
import "./GreenWatchOffert.css";

const GreenWatchOffert = () => {
    const navigate = useNavigate();
    return (
        <section className='greenCard'>
            <section className='flex md:flex-row flex-col md:justify-between justify-center lg:items-start items-center lg:pl-48 lg:pr-16 lg:py-28 md:px-8 px-6 md:py-10 pt-24 pb-14 relative'>
                <article className='lg:w-1/2 w-full flex md:justify-start justify-center md:items-start items-center flex-col md:text-left text-center'>
                    <span className='uppercase text-lg font-thin py-1'>
                        20% off
                    </span>
                    <p className='greenTitle'>
                        Happy <br /> hours
                    </p>
                    <span className='font-thin py-1'>15 Nov To 7 Dec</span>
                    <img
                        className='absolute md:scale-90 -top-60 lg:left-28 md:-left-28 -left-0'
                        src={GreenWatch}
                        alt='Green Smarth Watch Offert'
                    />
                </article>
                <article className='lg:w-1/2 w-full md:pl-32 flex md:justify-start justify-center md:items-start items-center flex-col md:text-left text-center md:mt-0 mt-16'>
                    <p className='capitalize font-medium lg:text-lg'>
                        beats solo air
                    </p>
                    <h3 className='lg:text-5xl text-3xl font-extrabold tracking-tight pt-2 pb-3'>
                        Summer sale
                    </h3>
                    <p className='font-thin lg:pr-24 md:pr-10 lg:text-lg'>
                        Company that's grown from 270 to 480 employees in the
                        last 12 months.
                    </p>
                    <button
                        className='greenBtn mt-8'
                        onClick={() => navigate("/Shop")}>
                        <span className='greenOverlay'></span>
                        <span>Shop</span>
                    </button>
                </article>
            </section>
        </section>
    );
};

export default GreenWatchOffert;
