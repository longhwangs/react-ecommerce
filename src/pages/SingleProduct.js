import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { IoIosGitCompare } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'

const SingleProduct = () => {
    const props = { width: 600, height: 500, zoomWidth: 500, img: "/images/tab.jpg" };
    const [orderedProduct, setOrderedProduct] = useState(true);
    return (
        <div>
            <Meta title={"Sing Product Name"} />
            <BreadCrumb title='Sing Product Name' />
            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className='other-product-images d-flex flex-wrap gap-15'>
                                <div>
                                    <img src='/images/tab1.jpg' alt='Tab 1' className='img-fluid' />
                                </div>
                                <div>
                                    <img src='/images/tab2.jpg' alt='Tab 2' className='img-fluid' />
                                </div>
                                <div>
                                    <img src='/images/tab3.jpg' alt='Tab 3' className='img-fluid' />
                                </div>
                                <div>
                                    <img src='/images/tab1.jpg' alt='Tab 1' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='main-product-detail'>
                                <div className='border-bottom'>
                                    <h3 className='title'>Kids headphones bilk 10 pack multi colored for students</h3>
                                </div>
                                <div className='border-bottom'>
                                    <p className='price mt-3'>$ 100.00</p>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0 link-color'>( 2 Reviews )</p>
                                    </div>
                                    <a href='#review' className='link-color py-3'>Write a review</a>
                                </div>
                                <div className='border-bottom py-3 link-color'>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <strong>Type: </strong> Headphone
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <strong>Brand: </strong> Sony
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <strong>Category: </strong> Headphone
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <strong>Tags: </strong> Headphone
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <strong>Availablity: </strong> In Stock
                                    </div>
                                    <div className='d-flex gap-10 flex-column my-2'>
                                        <strong>Size: </strong>
                                        <div className='d-flex flex-wrap gap-15'>
                                            <span className='badge border border-1 bg-white border-secondary text-dark'>S</span>
                                            <span className='badge border border-1 bg-white border-secondary text-dark'>M</span>
                                            <span className='badge border border-1 bg-white border-secondary text-dark'>L</span>
                                            <span className='badge border border-1 bg-white border-secondary text-dark'>XL</span>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column my-2'>
                                        <strong>Color: </strong>
                                        <Color />
                                    </div>
                                    <div className='d-flex gap-50 align-items-center flex-row mt-2'>
                                        <strong>Quantity: </strong>
                                        <div className='ms-2'>
                                            <input type='number' name='' className='form-control' style={{ width: "70px" }} min={1} />
                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button className='button border-0' type='submit'>Add To Cart</button>
                                            <button className='button signup'>Buy It Now</button>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-50 align-items-center py-3 mt-3'>
                                        <div>
                                            <a className='link-color' href=''><IoIosGitCompare /> Add to Compare</a>
                                        </div>
                                        <div>
                                            <a className='link-color ms-5' href=''><AiOutlineHeart /> Add to Wishlist</a>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column my-2'>
                                        <strong>Shipping & Returns : </strong>
                                        Free shipping and returns available on all orders! <br/>
                                        We ship all US domestic orders within{" "} 5-10 business days
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='description-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Description</h4>
                            <div>
                                <p className='bg-white p-3 rounded'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='review-wrapper home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Reviews</h4>
                            <div className='review-inner-wrapper'>
                                <div className='review-head d-flex justify-content-between align-items-end'>
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {orderedProduct && (
                                        <div>
                                            <a className='text-dark text-decoration-underline' href=''>Write a review</a>
                                        </div>
                                    )}
                                </div>
                                <div id='review' className='review-form py-4'>
                                    <h4>Write a review</h4>
                                    <form action='' className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                name=''
                                                id=''
                                                className='w-100 form-control'
                                                cols="30"
                                                rows="4"
                                                placeholder='Comments'
                                            ></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='reviews mt-4'>
                                    <div className='review'>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className='mb-0'>Navdeep</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className='mt-3'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='popular-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Our Popular Products</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleProduct;