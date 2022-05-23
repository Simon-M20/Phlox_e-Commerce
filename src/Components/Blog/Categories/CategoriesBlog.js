import React from "react";
// import { Link, useParams } from "react-router-dom";
import PostCard from "../../Home/Blog_Post/PostCard";
import { AllPost } from "../../Home/Blog_Post/PostData";
// import BrandsContainer from "../../Home/Brands/BrandsContainer";
// import Footer from "../../Home/Footer/Footer";
// import NavBar from "../../Home/NavBar/NavBar";
// import UncategorizedPost from "./Uncategorized/UncategorizedPost";

const CategoriesBlog = ({ activeCategory }) => {
    // const { name } = useParams();
    return (
        <section className='md:w-3/4 w-full md:border-r py-12 md:px-10 px-4 grid-cols-1 gap-y-10 grid'>
            {AllPost.map((post, index) =>
                post.category === activeCategory ? (
                    <PostCard
                        key={index}
                        title={post.title}
                        author={post.author}
                        date={post.time}
                        content={post.content}
                        image={post.image}
                        category={post.category}
                    />
                ) : (
                    <PostCard
                        key={index}
                        title={post.title}
                        author={post.author}
                        date={post.time}
                        content={post.content}
                        image={post.image}
                        category={post.category}
                    />
                )
            )}
        </section>
    );
};

export default CategoriesBlog;
