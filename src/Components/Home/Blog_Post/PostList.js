import React from "react";
import PostCard from "./PostCard";
import { PostData } from "./PostData";

const PostList = () => {
    return (
        <section className='pb-32 pt-8 postList'>
            <h2 className='lg:text-5xl text-3xl font-bold text-center'>
                Recent News
            </h2>
            <p className='text-gray-400 md:text-lg py-2 font-thin text-center'>
                Lorem ipsum dolor sit amet.
            </p>
            <article className='grid md:grid-cols-3 md:gap-x-6 gap-y-10 justify-items-center md:mt-10 mt-6'>
                {PostData.map((post, index) => (
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
            </article>
        </section>
    );
};

export default PostList;
