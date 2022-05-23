import React from "react";
import MapsImg from "../../Assets/Maps.jpg";

const ContactSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Sending pruck pruck prack");
    };

    const stylesImg = {
        borderRadius: "25px 25px 25px 25px",
        overflow: "hidden",
        boxShadow: "0px 10px 50px 0px #d1d5df",
    };

    return (
        <main className='flex flex-wrap justify-center items-center md:px-10 px-2 py-32'>
            <article className='md:w-2/5 w-full md:mb-0 mb-10'>
                <p
                    className='capitalize font-semibold'
                    style={{ color: "#f42c37" }}>
                    Contact us
                </p>
                <h1 className='text-black mt-2 mb-6 md:text-5xl text-3xl font-bold capitalize'>
                    get in touch
                </h1>
                <p className='py-2 text-justify'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                    ipsam atque, dolores eligendi ipsa libero eaque dicta
                    quisquam error provident!
                </p>
                <form
                    className='flex flex-col justify-center items-center w-full mt-5'
                    onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Your E-mail'
                        className='w-full border rounded-2xl px-6 py-3.5 mb-3 focus:outline-none'
                        style={{
                            backgroundColor: "transparent",
                            backgroundImage:
                                "linear-gradient(-105deg, #dcdcdc 54%, #eee 68%)",
                        }}
                    />
                    <input
                        type='text'
                        placeholder='Phone number'
                        className='w-full border rounded-2xl px-6 py-3.5 mb-3 focus:outline-none'
                        style={{
                            backgroundColor: "transparent",
                            backgroundImage:
                                "linear-gradient(-105deg, #dcdcdc 54%, #eee 68%)",
                        }}
                    />
                    <textarea
                        placeholder='Your Message Here'
                        rows='6'
                        className='w-full rounded-2xl px-5 py-4 border focus:outline-none'
                        style={{
                            resize: "none",
                            backgroundColor: "transparent",
                            backgroundImage:
                                "linear-gradient(-105deg, #dcdcdc 54%, #eee 68%)",
                        }}></textarea>
                    <div className='flex justify-end items-end w-4/5'>
                        <button className='aboutBtn'>
                            <span className='aboutBtn-overlay'></span>
                            <span>Submit</span>
                        </button>
                    </div>
                </form>
            </article>
            <article className='md:w-3/5 w-full'>
                <figure className='flex w-full justify-end items-end'>
                    <img src={MapsImg} alt='Google Maps' style={stylesImg} />
                </figure>
            </article>
        </main>
    );
};

export default ContactSection;
