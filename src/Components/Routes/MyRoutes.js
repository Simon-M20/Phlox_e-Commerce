import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import Blog from "../Pages/Blog";
import ContactUs from "../Pages/ContactUs";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Error404 from "../Ui/Error404";

const MyRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='About-us' element={<AboutUs />} />
                <Route path='Shop' element={<Shop />} />
                <Route path='Blog' element={<Blog />} />
                <Route path='Contact-us' element={<ContactUs />} />
                <Route path='*' element={<Error404 />} />
            </Routes>
        </HashRouter>
    );
};

export default MyRoutes;
