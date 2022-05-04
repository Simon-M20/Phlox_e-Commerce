import Golden from "../../../Assets/Brands/Golden-Collab.png";
import Sweety from "../../../Assets/Brands/Sweety-Collab.png";
import FastLane from "../../../Assets/Brands/FastLane-Collab.png";
import MigthyFurnitures from "../../../Assets/Brands/MigthyFurnitures-Collab.png";
import JackRoler from "../../../Assets/Brands/JackRoller-Collab.png";

import "./BrandsContainer.css";

const BrandsContainer = () => {
    return (
        <section className='flex flex-wrap w-full justify-between items-center brandContainer'>
            <figure className='md:w-1/5 w-full'>
                <img src={Golden} alt='Golder' />
            </figure>
            <figure className='md:w-1/5 w-full'>
                <img src={Sweety} alt='Sweety' />
            </figure>
            <figure className='md:w-1/5 w-full'>
                <img src={FastLane} alt='FastLane' />
            </figure>
            <figure className='md:w-1/5 w-full'>
                <img src={MigthyFurnitures} alt='Migthy Furnitures' />
            </figure>
            <figure className='md:w-1/5 w-full'>
                <img src={JackRoler} alt='Jack Roler' />
            </figure>
        </section>
    );
};

export default BrandsContainer;
