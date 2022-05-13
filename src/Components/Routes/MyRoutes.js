import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import Blog from "../Pages/Blog";
import ContactUs from "../Pages/ContactUs";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";

const MyRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='About-us' element={<AboutUs />} />
                <Route path='Shop' element={<Shop />} />
                <Route path='Blog' element={<Blog />} />
                <Route path='Contact-us' element={<ContactUs />} />
            </Routes>
        </HashRouter>
    );
};

export default MyRoutes;
