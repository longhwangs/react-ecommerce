import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from './BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Meta from '../components/Meta';
import Container from '../components/Container';
import { services } from '../utils/Data';

const Home = () => {
    return (
        <>


            <Meta title='Home' />
            {/* Section 1 */}
            <Container name="home-wrapper-1 py-5">
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-banner position-relative'>
                            <img className='img-fluid rounded-3'
                                src='images/main-banner-1.jpg'
                                alt='main-banner'
                            />
                            <div className='main-banner-content position-absolute'>
                                <h4>SUPPERCHARGED FOR PROS.</h4>
                                <h5>iPad S13+ Pro</h5>
                                <p>From $999.00 or <br /> $41.62/mo.</p>
                                <Link className='button'>BUY NOW</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                            <div className='small-banner position-relative'>
                                <img className='img-fluid rounded-3'
                                    src='images/catbanner-01.jpg'
                                    alt='main-banner'
                                />
                                <div className='small-banner-content position-absolute'>
                                    <h4>BEST SALE</h4>
                                    <h5>Laptops Max</h5>
                                    <p>From $1699.00 or <br /> $41.62/mo.</p>
                                </div>
                            </div>
                            <div className='small-banner position-relative'>
                                <img className='img-fluid rounded-3'
                                    src='images/catbanner-02.jpg'
                                    alt='main-banner'
                                />
                                <div className='small-banner-content position-absolute'>
                                    <h4>15% OFF</h4>
                                    <h5>Smartwatch 7</h5>
                                    <p>Shop the lastest band <br /> styles and colors.</p>
                                </div>
                            </div>
                            <div className='small-banner position-relative'>
                                <img className='img-fluid rounded-3'
                                    src='images/catbanner-03.jpg'
                                    alt='main-banner'
                                />
                                <div className='small-banner-content position-absolute'>
                                    <h4>NEW ARRIVAL</h4>
                                    <h5>Buy IPad Air</h5>
                                    <p>From $599.00 or <br /> $41.62/mo. for 12 mo.*</p>
                                </div>
                            </div>
                            <div className='small-banner position-relative'>
                                <img className='img-fluid rounded-3'
                                    src='images/catbanner-04.jpg'
                                    alt='main-banner'
                                />
                                <div className='small-banner-content position-absolute'>
                                    <h4>FREE ENGRAVING</h4>
                                    <h5>AirPods Max</h5>
                                    <p>High-fidelity playback & <br /> ultra-low dsitortion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            {/* End section 1 */}

            {/* Section 2 */}
            <Container name='home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <section className='services d-flex align-items-center justify-content-between'>
                            {
                                services?.map((item, index) => {
                                    return (
                                        <div className="d-flex align-items-center gap-15" key={index}>
                                            <img src={item.image} alt='service' />
                                            <div>
                                                <h6>{item.title}</h6>
                                                <p className='mb-0'>{item.description}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </section>
                    </div>
                </div>
            </Container>
            {/* End section 2 */}

            {/* Section 3 */}
            <Container name='home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Camera</h6>
                                    <p>Item</p>
                                </div>
                                <img src='images/camera.jpg' alt='Camera' />
                            </div>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Smart TV</h6>
                                    <p>Item</p>
                                </div>
                                <img src='images/tv.jpg' alt='TV' />
                            </div>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>Item</p>
                                </div>
                                <img src='images/camera.jpg' alt='Camera' />
                            </div>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Headphone</h6>
                                    <p>Item</p>
                                </div>
                                <img src='images/headphone.jpg' alt='Headphone' />
                            </div>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Camera</h6>
                                    <p>Item</p>
                                </div>
                                <img src='images/camera.jpg' alt='Camera' />
                            </div>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Smart TV</h6>
                                    <p>Item</p>
                                </div>
                                <img src='images/tv.jpg' alt='TV' />
                            </div>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>Item</p>
                                </div>
                                <img src='images/camera.jpg' alt='Camera' />
                            </div>
                            <div className='d-flex gap align-items-center'>
                                <div>
                                    <h6>Headphone</h6>
                                    <p>Item</p>
                                </div>
                                <img src='images/headphone.jpg' alt='Headphone' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            {/* End section 3 */}

            {/* Featured Collection */}
            <Container name='featured-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Featured Collection</h3>
                    </div>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>
            {/* End Featured Collection */}

            {/* Famous */}
            <Container name='famous-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='famous-card bg-white'>
                            <div className='famous-content p-3'>
                                <h5>Bug Screen</h5>
                                <h6>Smart Watch Series 7</h6>
                                <p>From $399 or $41.00/mo. for 24 mo.*</p>
                            </div>
                            <img src='images/watch.jpg' className='img-fluid' alt='Famous' />
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='famous-card bg-white'>
                            <div className='famous-content p-3'>
                                <h5>Studio display</h5>
                                <h6>600 nits of brightness.</h6>
                                <p>27-inch 5K Retina display</p>
                            </div>
                            <img src='images/watch.jpg' className='img-fluid' alt='Famous' />
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='famous-card bg-white'>
                            <div className='famous-content p-3'>
                                <h5>Smartphones</h5>
                                <h6>Smartphone 13 Pro</h6>
                                <p>Now in Grenn, From $999.00 or $41.23/mo. for 24 mo. Footnote*</p>
                            </div>
                            <img src='images/watch.jpg' className='img-fluid' alt='Famous' />
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='famous-card bg-white'>
                            <div className='famous-content p-3'>
                                <h5>Home Speakers</h5>
                                <h6>Room-filling sound.</h6>
                                <p>From $699 or $116.58/mo. for 12 mo.*</p>
                            </div>
                            <img src='images/watch.jpg' className='img-fluid' alt='Famous' />
                        </div>
                    </div>
                </div>
            </Container>
            {/* End Famous */}

            {/* Special */}
            <Container name='special-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Special Collection</h3>
                    </div>
                </div>
                <div className='row'>
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                </div>
                <div className='row'>
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                </div>
            </Container>
            {/* End Special */}

            {/* Popular */}
            <Container name='popular-wrapper py-5 home-wrapper-2'>
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
            </Container>
            {/* End Popular */}

            {/* Marquee section */}
            <Container name='marquee-wrapper py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='marquee-inner-wrapper card-wrapper'>
                            <Marquee className='d-flex'>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-01.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-02.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-03.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-04.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-05.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-06.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-07.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/brand-08.png' alt='brand' />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>
            {/* End marquee */}

            {/* Blog */}
            <Container name='blog-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Our Latest Blogs</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <BlogCard />
                    </div>
                    <div className='col-3'>
                        <BlogCard />
                    </div>
                    <div className='col-3'>
                        <BlogCard />
                    </div>
                    <div className='col-3'>
                        <BlogCard />
                    </div>
                </div>
            </Container>
            {/* End Blog */}
        </>
    );
};

export default Home;