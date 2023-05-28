import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Wishlist = () => {
    return (
        <div>
            <Meta title="Wishlist" />
            <BreadCrumb title='Wishlist' />
            <div className='wishlist-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className='img-fluid w-100' alt='watch' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        headphone bulk 10 pack multi colored for students
                                    </h5>
                                    <h6 className='price mb-3 mt-3'>$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className='img-fluid w-100' alt='watch' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        headphone bulk 10 pack multi colored for students
                                    </h5>
                                    <h6 className='price mb-3 mt-3'>$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className='img-fluid w-100' alt='watch' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        headphone bulk 10 pack multi colored for students
                                    </h5>
                                    <h6 className='price mb-3 mt-3'>$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='' className='position-absolute cross img-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className='img-fluid w-100' alt='watch' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>
                                        headphone bulk 10 pack multi colored for students
                                    </h5>
                                    <h6 className='price mb-3 mt-3'>$100</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;