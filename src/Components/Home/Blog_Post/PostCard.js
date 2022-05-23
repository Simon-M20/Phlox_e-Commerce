import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GlobalContext from "../../../Context/GlobalContext";
import "./PostCard.css";

const PostCard = ({ title, date, author, content, image, category }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const { setPostInfo } = useContext(GlobalContext);

    const handleNavigation = () => {
        if (location.pathname === "/") {
            navigate(`Blog/Category/Uncategorized/${title}`);
        }

        if (location.pathname === "/Blog") {
            navigate(`Category/Uncategorized/${title}`);
        }

        if (location.pathname === "/Blog/Category") {
            navigate(`Uncategorized/${title}`);
        }

        setPostInfo({ title, date, author, content, image, category });
    };

    return (
        <figure className='postCard'>
            <img
                className='rounded-3xl cursor-pointer'
                src={image}
                alt={title}
                onClick={handleNavigation}
            />
            <figcaption className='pt-6'>
                <span className='font-thin flex items-center justify-start mx-auto px-2'>
                    <p className='post__date'>{date}</p>
                    <span className='mx-2'>·</span>
                    <p>{author}</p>
                    <span className='mx-2'>·</span>
                    <p>{category}</p>
                </span>
                <h3
                    className='py-5 text-black font-extrabold text-2xl cursor-pointer'
                    onClick={handleNavigation}>
                    {title}
                </h3>
                <p className='text-left pr-4'>{content}</p>
            </figcaption>
        </figure>
    );
};

export default PostCard;
