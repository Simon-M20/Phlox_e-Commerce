import PhloxLogo from "../../../Assets/Phlox_Logo.png";
import "./NavBar.css";
import "./MenuBtn.css";
import { useState } from "react";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        const menuBtn = document.querySelector(".menuList");

        if (menuBtn.classList.contains("is-active")) {
            menuBtn.classList.remove("is-active");
            // console.log(menuBtn);
        } else {
            menuBtn.classList.add("is-active");
            // console.log(menuBtn);
        }

        setShowMenu(!showMenu);
    };
    return (
        <header className='flex justify-between items-center lg:px-6 px-2 pt-5 pb-4'>
            <section className='lg:w-1/2 md:w-4/5 flex items-center justify-start'>
                <figure className='pr-6'>
                    <img
                        src={PhloxLogo}
                        alt='Phlox Logo'
                        loading='lazy'
                        title='Phlox Logo'
                    />
                </figure>
                <nav className={`${showMenu ? "menu is-active" : "menu"}`}>
                    <button
                        className='md:hidden block menuClose'
                        onClick={() => setShowMenu(false)}
                    >
                        <span className='material-icons-outlined'>close</span>
                    </button>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Shop</a>
                        </li>
                        <li>
                            <a href='#'>About Us</a>
                        </li>
                        <li>
                            <a href='#'>Blog</a>
                        </li>
                        <li>
                            <a href='#'>Contact Us</a>
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
                    className='hamburger-list hamburger--vortex menuList'
                    type='button'
                    onClick={handleMenuClick}
                >
                    <span className='hamburger-list--box'>
                        <span className='hamburger-list-inner'></span>
                    </span>
                </button>
            </section>
        </header>
    );
};

export default NavBar;
