import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../Home/Blog_Post/PostCard";
import { AllPost } from "../Home/Blog_Post/PostData";
import BrandsContainer from "../Home/Brands/BrandsContainer";
import Footer from "../Home/Footer/Footer";
import NavBar from "../Home/NavBar/NavBar";

const Blog = () => {
    return (
        <section>
            <NavBar />
            <section className='routes-section'>
                <article className='flex items-center justify-center font-thin md:text-lg'>
                    <p className='routes__links'>
                        <Link to='/'>Home</Link>
                    </p>
                    <span class='material-icons-outlined mx-2'>
                        keyboard_arrow_right
                    </span>
                    <p>Blog</p>
                </article>
                <h2 className='md:text-3xl text-2xl text-black font-extrabold text-center mt-3'>
                    Blog
                </h2>
            </section>
            <section className='grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-10 gap-y-14 justify-items-center md:py-32 py-16 md:px-10 px-4'>
                {AllPost.map((post, index) => (
                    <PostCard
                        key={index}
                        title={post.title}
                        author={post.author}
                        date={post.time}
                        content={post.content}
                        image={post.image}
                        id={index}
                    />
                ))}
            </section>
            <BrandsContainer />
            <Footer />
        </section>
    );
};

export default Blog;
