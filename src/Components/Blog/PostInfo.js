import React from "react";
import { Link, useParams } from "react-router-dom";

const PostInfo = () => {
    const { name } = useParams();
    console.log(name);
    return (
        <section>
            <section>
                <article>
                    <Link to='/'>Home</Link>
                    <Link to='/Blog'>Blog</Link>
                    <Link to='/Blog/Uncategorized'>Uncategorized</Link>
                    <p>{name}</p>
                </article>
            </section>
        </section>
    );
};

export default PostInfo;
