import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div>
            <Meta title="Cart" />
            <BreadCrumb title="Cart" />
            <section className='cart-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='cart-header d-flex justify-content-between align-items-center'>
                                <h4 className='cart-col-1'>PRODUCT</h4>
                                <h4 className='cart-col-2'>PRICE</h4>
                                <h4 className='cart-col-3'>QUANTITY</h4>
                                <h4 className='cart-col-4'>TOTAL</h4>
                            </div>
                            <div className='cart-detail py-3 d-flex justify-content-between align-items-center'>
                                <h4 className='cart-col-1 gap-15 d-flex align-items-center'>
                                    <div className='w-25'>
                                        <img src='/images/watch.jpg' alt='watch' className='img-fluid' />
                                    </div>
                                    <div className='w-75'>
                                        <p>Iphone</p>
                                        <p>Color: Red</p>
                                        <p>Size: M</p>
                                    </div>
                                </h4>
                                <h4 className='cart-col-2'>
                                    <h5 className='price'>$ 100.00</h5>
                                </h4>
                                <h4 className='cart-col-3 d-flex align-items-center gap-15'>
                                    <div>
                                        <input type='number' name='' min={1} max={100} className='form-control' />
                                    </div>
                                    <div>
                                        <RiDeleteBinLine className='text-danger' />
                                    </div>
                                </h4>
                                <h4 className='cart-col-4'>
                                    <h5 className='price'>$ 100.00</h5>
                                </h4>
                            </div>
                            <div className='cart-detail py-3 d-flex justify-content-between align-items-center'>
                                <h4 className='cart-col-1 gap-15 d-flex align-items-center'>
                                    <div className='w-25'>
                                        <img src='/images/watch.jpg' alt='watch' className='img-fluid' />
                                    </div>
                                    <div className='w-75'>
                                        <p>Iphone</p>
                                        <p>Color: Red</p>
                                        <p>Size: M</p>
                                    </div>
                                </h4>
                                <h4 className='cart-col-2'>
                                    <h5 className='price'>$ 100.00</h5>
                                </h4>
                                <h4 className='cart-col-3 d-flex align-items-center gap-15'>
                                    <div>
                                        <input type='number' name='' min={1} max={100} className='form-control' />
                                    </div>
                                    <div>
                                        <RiDeleteBinLine className='text-danger' />
                                    </div>
                                </h4>
                                <h4 className='cart-col-4'>
                                    <h5 className='price'>$ 100.00</h5>
                                </h4>
                            </div>
                        </div>
                        <div className='col-12 py-2 mt-4'>
                            <div className='d-flex justify-content-between align-items-baseline'>
                                <Link to='/store' className='button'>Continue to shopping</Link>
                                <div className='d-flex flex-column align-items-end'>
                                    <h4>Sub Total: $ 1000</h4>
                                    <p>Taxes and shipping calculated at checkout</p>
                                    <Link to='/checkout' className='button'>Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;