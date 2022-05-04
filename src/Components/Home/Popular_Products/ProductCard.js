import "./ProductsCard.css";

const ProductCard = ({ name, price, sale, discount, image }) => {
    return (
        <figure className='text-left py-2 productCard'>
            <div className='relative'>
                <img
                    className='rounded-3xl productImg'
                    src={image}
                    alt={name}
                />
                {sale ? (
                    <span className='rounded-full absolute w-12 h-12 text-white top-5 left-5 flex justify-center items-center font-semibold saleBg text-sm'>
                        Sale!
                    </span>
                ) : (
                    ""
                )}
            </div>
            <figcaption className='relative'>
                <h3 className='font-medium text-lg mt-3 productTitle'>
                    {name}
                </h3>
                <div className='py-1 priceContainer'>
                    {discount.length > 0 ? (
                        <small className='text-gray-400 font-thin mr-3 text-base line-through'>
                            -{discount}
                        </small>
                    ) : (
                        ""
                    )}
                    <span className='font-extrabold md:text-xl text-lg'>
                        {price}
                    </span>
                </div>
                <div className='addContainer'>
                    <button className='addBtn px-6 py-1.5 border md:text-lg rounded-full'>
                        Add to Cart
                    </button>
                </div>
            </figcaption>
        </figure>
    );
};

export default ProductCard;
