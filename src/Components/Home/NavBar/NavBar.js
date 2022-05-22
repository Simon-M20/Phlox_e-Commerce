import PhloxLogo from "../../../Assets/Phlox_Logo.png";
import "./NavBar.css";
import "./MenuBtn.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    // const handleMenuClick = () => {
    //     const menuBtn = document.querySelector(".menuList");

    //     if (menuBtn.classList.contains("is-active")) {
    //         menuBtn.classList.remove("is-active");
    //     } else {
    //         menuBtn.classList.add("is-active");
    //     }

    //     setShowMenu(!showMenu);
    // };
    return (
        <header className='flex justify-between items-center lg:px-10 px-4 pt-7 pb-6'>
            <section className='lg:w-1/2 md:w-4/5 flex items-center justify-start'>
                <figure className='pr-6'>
                    <Link to='/'>
                        <img
                            src={PhloxLogo}
                            alt='Phlox Logo'
                            loading='lazy'
                            title='Phlox Logo'
                        />
                    </Link>
                </figure>
                <nav className={`${showMenu ? "menu is-active" : "menu"}`}>
                    <button
                        className='md:hidden block menuClose'
                        onClick={() => setShowMenu(false)}>
                        <span className='material-icons-outlined'>close</span>
                    </button>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                            {/* <a href='#'>Home</a> */}
                        </li>
                        <li>
                            <Link to='/Shop'>Shop</Link>
                            {/* <a href='#'>Shop</a> */}
                        </li>
                        <li>
                            <Link to='/About-us'>About Us</Link>
                            {/* <a href='#'>About Us</a> */}
                        </li>
                        <li>
                            <Link to='/Blog'>Blog</Link>
                            {/* <a href='#'>Blog</a> */}
                        </li>
                        <li>
                            <Link to='/Contact-us'>Contact Us</Link>
                            {/* <a href='#'>Contact Us</a> */}
                        </li>
                    </ul>
                </nav>
            </section>
            <section className='flex items-center md:w-auto'>
                <button className='loginBtn md:px-4 px-1'>login</button>
                <button className='flex items-center md:px-4 px-1'>
                    <span className='material-icons-outlined navIcons'>
                        search
                    </span>
                </button>
                <button className='flex items-center md:px-4 pl-1 pr-4'>
                    <span className='material-icons-outlined navIcons'>
                        local_mall
                    </span>
                </button>
                <button
                    className={`hamburger-list hamburger--vortex ${
                        showMenu ? "menuList is-active" : "menuList"
                    } `}
                    type='button'
                    onClick={() => setShowMenu(!showMenu)}>
                    <span className='hamburger-list--box'>
                        <span className='hamburger-list-inner'></span>
                    </span>
                </button>
            </section>
        </header>
    );
};

export default NavBar;
