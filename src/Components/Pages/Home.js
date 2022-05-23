import GreenWatchOffert from "../Home/Banners/GreenWatchOffert";
import HeadphoneOffert from "../Home/Banners/HeadphoneOffert";
import PostList from "../Home/Blog_Post/PostList";
import BrandsContainer from "../Home/Brands/BrandsContainer";
import Footer from "../Home/Footer/Footer";
import Hero from "../Home/Hero_Section/Hero";
import MainProducts from "../Home/Main_Products/MainProducts";
import NavBar from "../Home/NavBar/NavBar";
import ProductList from "../Home/Popular_Products/ProductList";

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <MainProducts />
            <HeadphoneOffert />
            <ProductList />
            <GreenWatchOffert />
            <PostList />
            <BrandsContainer />
            <Footer />
        </>
    );
};

export default Home;
