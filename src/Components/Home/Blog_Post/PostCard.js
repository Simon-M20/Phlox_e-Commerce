import { useNavigate } from "react-router-dom";
import "./PostCard.css";

const PostCard = ({ title, date, author, content, image, id }) => {
    const navigate = useNavigate();

    return (
        <figure className='postCard'>
            <img
                className='rounded-3xl cursor-pointer'
                src={image}
                alt={title}
                onClick={() =>
                    navigate(`Category/Uncategorized/${title}-${id}`)
                }
            />
            <figcaption className='pt-6'>
                <span className='font-thin'>
                    {date} · {author}
                </span>
                <h3
                    className='py-5 text-balck font-extrabold text-2xl cursor-pointer'
                    onClick={() =>
                        navigate(`Category/Uncategorized/${title}-${id}`)
                    }>
                    {title}
                </h3>
                <p className='text-left pr-4'>{content}</p>
            </figcaption>
        </figure>
    );
};

export default PostCard;
