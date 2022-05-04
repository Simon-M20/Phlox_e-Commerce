import "./PostCard.css";

const PostCard = ({ title, date, author, content, image }) => {
    return (
        <figure className='postCard'>
            <img
                className='rounded-3xl cursor-pointer'
                src={image}
                alt={title}
            />
            <figcaption className='pt-6'>
                <span className='font-thin'>
                    {date} · {author}
                </span>
                <h3 className='py-5 text-balck font-extrabold text-2xl cursor-pointer'>
                    {title}
                </h3>
                <p className='text-left pr-4'>{content}</p>
            </figcaption>
        </figure>
    );
};

export default PostCard;
