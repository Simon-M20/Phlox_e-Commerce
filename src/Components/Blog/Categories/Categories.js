import { useState } from "react";
// import { Link } from "react-router-dom";
// import BrandsContainer from "../../Home/Brands/BrandsContainer";
// import Footer from "../../Home/Footer/Footer";
// import NavBar from "../../Home/NavBar/NavBar";

import "./Categories.css";

const Categories = () => {
    const [showCategories, setShowCategories] = useState(false);

    return (
        <section className='md:block md:w-1/4 hidden p-5'>
            <button
                className='text-xl font-bold flex items-center border-b w-4/5 pb-3 cursor-pointer'
                onClick={() => setShowCategories(!showCategories)}>
                Blog Categories
                <span className='material-icons-outlined ml-2'>
                    arrow_drop_down
                </span>
            </button>
            {showCategories && (
                <section
                    className={`${
                        showCategories
                            ? "categories__section is-active"
                            : "categories__section"
                    }`}>
                    <ul className='ml-4'>
                        <li className='routes__links cursor-pointer capitalize'>
                            Accesories
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                adaptadores y cables
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                fundas y protectores
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                mochilas
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                mouse
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                parlantes pc
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                teclado
                            </li>
                        </ul>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Almacenamiento
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                discos duros
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                tarjetas de memoria
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                usb flash drive
                            </li>
                        </ul>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Audio
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                audifonos
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                audifonos inalámbricos
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                barras de sonido
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                cables, adaptaciones y accesorios
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                parlantes
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                radios
                            </li>
                        </ul>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Auriculares
                        </li>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Celulares y Tablets
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                Accesorios
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                celulares
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                Tablets
                            </li>
                        </ul>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Componentes
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                Cases
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                coolers
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                discos duros
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                mainboard
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                memories
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                procesadores
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                tarjetas de red
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                tarjetas de video
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                unidades opticas
                            </li>
                        </ul>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Computadoras
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                escritorio
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                laptops
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                software
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                todo en uno
                            </li>
                        </ul>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Gadgets
                        </li>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Gaming
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                Accesorios
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                pc y laptops
                            </li>
                        </ul>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Headphone
                        </li>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Hogar
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                Clima
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                cocina
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                limpieza
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                Muebles
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                smart home
                            </li>
                        </ul>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Impresoras y escaners
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                Escaners
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                impresora laser
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                impresora de inyección
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                punto de venta
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                suministros
                            </li>
                        </ul>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Laptop
                        </li>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Proteccion de voltaje
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                Accesorios
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                Reguladores
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                Supresores
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                UPS
                            </li>
                        </ul>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Redes
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                Accesorios para cableado
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                access point
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                adaptadores
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                antenas y radio enlaces
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                cables
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                router
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                switch
                            </li>
                        </ul>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Seguridad
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                accesorios
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                camaras de seguridad
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                kits de seguridad
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                lector biometrico
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                video porteros
                            </li>
                        </ul>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Servidores
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                almacenamiento NAS
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                componentes
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                tipo rack
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                ripo torre
                            </li>
                        </ul>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Speaker
                        </li>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            telefonia y videoconferencia
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                Accesorios
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                telefonos analogos
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                telefonos Ip
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                Videoconferencia
                            </li>
                        </ul>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Tv y Video
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                Accesorios
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                camaras
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                proyectores
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                televisores
                            </li>
                        </ul>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Uncategorized
                        </li>
                        <li className='routes__links cursor-pointer capitalize mt-3'>
                            Videojuegos
                        </li>
                        <ul className='ml-7'>
                            <li className='routes__links cursor-pointer capitalize'>
                                Accesorios
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                Consolas
                            </li>
                            <li className='routes__links cursor-pointer capitalize'>
                                Juegos
                            </li>
                        </ul>
                    </ul>
                </section>
            )}
        </section>
    );
};

export default Categories;
