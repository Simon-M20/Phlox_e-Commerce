import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import BrandsContainer from "../Home/Brands/BrandsContainer";
import Footer from "../Home/Footer/Footer";
import NavBar from "../Home/NavBar/NavBar";
import GlobalContext from "../../Context/GlobalContext";

import "./PostInfo.css";
import Comments from "./Comments";

const PostInfo = () => {
    const { name } = useParams();

    const { postInfo } = useContext(GlobalContext);
    console.log(postInfo);

    return (
        <section>
            <NavBar />
            <section className='routes-section'>
                <article className='flex items-center justify-center font-thin md:text-lg'>
                    <Link to='/' className='routes__links'>
                        Home
                    </Link>
                    <span class='material-icons-outlined mx-2'>
                        keyboard_arrow_right
                    </span>
                    <Link to='/Blog' className='routes__links'>
                        Blog
                    </Link>
                    <span class='material-icons-outlined mx-2'>
                        keyboard_arrow_right
                    </span>
                    <Link to='/Blog/Category' className='routes__links'>
                        Category
                    </Link>
                    <span class='material-icons-outlined mx-2'>
                        keyboard_arrow_right
                    </span>
                    <Link
                        to='/Blog/Category/Uncategorized'
                        className='routes__links'>
                        Uncategorized
                    </Link>
                    <span class='material-icons-outlined mx-2'>
                        keyboard_arrow_right
                    </span>
                    <p>{name}</p>
                </article>
                <h2 className='md:text-3xl text-2xl text-black font-extrabold text-center mt-3'>
                    {name}
                </h2>
            </section>

            <section className='md:w-3/4 md:px-0 px-2 w-full mx-auto'>
                <figure className='post__img mx-auto pt-16 pb-10'>
                    <img src={postInfo.image} alt={postInfo.title} />
                </figure>
                <article className='flex items-center justify-start mx-auto'>
                    <p className='post__date'>{postInfo.date}</p>
                    <span className='mx-2'>·</span>
                    <p>{postInfo.author}</p>
                </article>
                <article className='px-6 pt-2 pb-32'>
                    <h3 className='text-2xl text-center font-semibold my-6'>
                        {postInfo.title}
                    </h3>
                    <p className='leading-relaxed text-justify pb-5'>
                        When, while the lovely valley teems with vapour around
                        me, and the meridian sun strikes the upper surface of
                        the impenetrable foliage of my trees, and but a few
                        stray gleams steal into the inner sanctuary, I throw
                        myself down among the tall grass by the trickling
                        stream; and, as I lie close to the earth, a thousand
                        unknown plants are noticed by me: when I hear the buzz
                        of the little world among the stalks, and grow familiar
                        with the countless indescribable forms of the insects
                        and flies, then I feel the presence of the Almighty, who
                        formed us in his own image, and the breath of that
                        universal love which bears and sustains us, as it floats
                        around us in an eternity of bliss; and then, my friend,
                        when darkness overspreads my eyes, and heaven and earth
                        seem to dwell in my soul and absorb its power, like the
                        form of a beloved mistress, then I often think with
                        longing, Oh, would I could describe these conceptions,
                        could impress upon paper all that is living so full and
                        warm within me, that it might be the mirror of my soul,
                        as my soul is the mirror of the infinite God!
                    </p>
                    <p className='leading-relaxed text-justify pb-5'>
                        O my friend — but it is too much for my strength — I
                        sink under the weight of the splendour of these visions!
                        A wonderful serenity has taken possession of my entire
                        soul, like these sweet mornings of spring which I enjoy
                        with my whole heart. I am alone, and feel the charm of
                        existence in this spot, which was created for the bliss
                        of souls like mine.
                    </p>
                    <p className='leading-relaxed text-justify pb-5'>
                        I am so happy, my dear friend, so absorbed in the
                        exquisite sense of mere tranquil existence, that I
                        neglect my talents. I should be incapable of drawing a
                        single stroke at the present moment; and yet I feel that
                        I never was a greater artist than now.
                    </p>
                    <p className='leading-relaxed text-justify pb-5'>
                        When, while the lovely valley teems with vapour around
                        me, and the meridian sun strikes the upper surface of
                        the impenetrable foliage of my trees, and but a few
                        stray gleams steal into the inner sanctuary, I throw
                        myself down among the tall grass by the trickling
                        stream; and, as I lie close to the earth, a thousand
                        unknown plants are noticed by me: when I hear the buzz
                        of the little world among the stalks, and grow familiar
                        with the countless indescribable forms of the insects
                        and flies, then I feel the presence of the Almighty, who
                        formed us in his own image, and the breath of that
                        universal love which bears and sustains us, as it floats
                        around us in an eternity of bliss; and then, my friend,
                        when darkness overspreads my eyes, and heaven and earth
                        seem to dwell in my soul and absorb its power, like the
                        form of a beloved mistress, then I often think with
                        longing, Oh, would I could describe these conceptions,
                        could impress upon paper all that is living so full and
                        warm within me.
                    </p>
                </article>
            </section>
            <Comments />
            <BrandsContainer />
            <Footer />
        </section>
    );
};

export default PostInfo;
