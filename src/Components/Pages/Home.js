import GreenWatchOffert from "../Home/Banners/GreenWatchOffert";
import HeadphoneOffert from "../Home/Banners/HeadphoneOffert";
import PostList from "../Home/Blog_Post/PostList";
import Hero from "../Home/Hero_Section/Hero";
import MainProducts from "../Home/Main_Products/MainProducts";
import NavBar from "../Home/NavBar/NavBar";
import ProductList from "../Home/Popular_Products/ProductList";

const Home = () => {
    return (
        <section>
            <NavBar />
            <Hero />
            <MainProducts />
            <HeadphoneOffert />
            <ProductList />
            <GreenWatchOffert />
            <PostList />
        </section>
    );
};

export default Home;
