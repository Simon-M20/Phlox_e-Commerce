import React from "react";
import ProductCard from "./ProductCard";
import { ProductsData } from "./ProductsData";

const ProductList = () => {
    return (
        <section className='text-center py-10 productList'>
            <h2 className='lg:text-5xl text-3xl font-bold'>Best Sellers</h2>
            <p className='text-gray-400 md:text-lg py-2 font-thin'>
                speakerThere are many variations passages
            </p>
            <article className='grid lg:grid-cols-4 md:grid-cols-2 lg:gap-x-4 md:gap-x-8 md:gap-y-8 gap-y-4 justify-items-center mt-8'>
                {ProductsData.map((item, index) => (
                    <ProductCard
                        key={index}
                        name={item.title}
                        price={item.price}
                        discount={item.discount}
                        sale={item.sale}
                        image={item.image}
                    />
                ))}
            </article>
        </section>
    );
};

export default ProductList;
