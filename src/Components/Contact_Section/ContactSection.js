import React from "react";

const ContactSection = () => {
    return (
        <section className='flex justify-center items-center'>
            <article className='md:w-2/5 w-full'>
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
                <form>
                    <input type='text' placeholder='Your E-mail' />
                    <input type='text' placeholder='Phone number' />
                    <textarea placeholder='Your Message Here'></textarea>
                    <div className='flex justify-end items-end w-4/5'>
                        <button className='aboutBtn'>
                            <span className='aboutBtn-overlay'></span>
                            <span>Submit</span>
                        </button>
                    </div>
                </form>
            </article>
            <article></article>
        </section>
    );
};

export default ContactSection;
