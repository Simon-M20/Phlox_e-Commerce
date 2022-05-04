import GreenWatchOffert from "../Home/Banners/GreenWatchOffert";
import HeadphoneOffert from "../Home/Banners/HeadphoneOffert";
import PostList from "../Home/Blog_Post/PostList";
import BrandsContainer from "../Home/Brands/BrandsContainer";
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
            <BrandsContainer />
        </section>
    );
};

export default Home;
