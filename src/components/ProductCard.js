import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const { grid } = props
    let location = useLocation();

    return (
        <div className={` ${location.pathname === "/store" ? `col-${grid}` : "col-3"} `}>
            <Link to='/product/:id' className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <button className='border-0 bg-transparent'>
                        <img src='/images/wish.svg' alt='wish' />
                    </button>
                </div>
                <div className='product-image'>
                    <img src='/images/watch.jpg' className='img-fluid' alt='product' />
                    <img src='/images/laptop.jpg' className='img-fluid' alt='product' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havel</h6>
                    <h5 className='product-title'>
                        Kids headphone bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                        Helmet takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly.
                    </p>
                    <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column'>
                        <button className='border-0 bg-transparent'>
                            <img src='/images/prodcompare.svg' alt='compare' />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src='/images/view.svg' alt='view' />
                        </button>
                        <button className='border-0 bg-transparent'>
                            <img src='/images/add-cart.svg' alt='addcard' />
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;