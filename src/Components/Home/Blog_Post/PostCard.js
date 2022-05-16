import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GlobalContext from "../../../Context/GlobalContext";
import "./PostCard.css";

const PostCard = ({ title, date, author, content, image, id }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const { setPostInfo } = useContext(GlobalContext);

    const handleNavigation = () => {
        if (location.pathname === "/") {
            navigate(`Blog/Category/Uncategorized/${title}`);
        } else {
            navigate(`Category/Uncategorized/${title}`);
        }

        setPostInfo({ title, date, author, content, image });
    };

    return (
        <figure className='postCard'>
            {/* <Link to={`Category/Uncategorized/${title}`}> */}
            <img
                className='rounded-3xl cursor-pointer'
                src={image}
                alt={title}
                onClick={handleNavigation}
            />
            {/* </Link> */}
            <figcaption className='pt-6'>
                <span className='font-thin'>
                    {date} · {author}
                </span>
                <h3
                    className='py-5 text-balck font-extrabold text-2xl cursor-pointer'
                    onClick={handleNavigation}>
                    {title}
                </h3>
                <p className='text-left pr-4'>{content}</p>
            </figcaption>
        </figure>
    );
};

export default PostCard;
