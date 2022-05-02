import Hero from "../Home/Hero_Section/Hero";
import MainProducts from "../Home/Main_Products/MainProducts";
import NavBar from "../Home/NavBar/NavBar";

const Home = () => {
    return (
        <section>
            <NavBar />
            <Hero />
            <MainProducts />
        </section>
    );
};

export default Home;
