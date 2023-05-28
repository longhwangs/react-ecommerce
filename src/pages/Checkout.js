import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { IoReturnDownBack } from 'react-icons/io5';

const Checkout = () => {
    return (
        <div>
            <Meta title="Checkout" />
            <BreadCrumb title="Checkout" />
            <div className='checkout-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkour-left-data'>
                                <h3 className='web-name'>
                                    Dev Conner
                                </h3>
                                <nav className='breakcrumb' aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link className='text-dark' to="/cart">Cart</Link></li>
                                        <li className="breadcrumb-item total active" aria-current="page">Infomation</li>
                                        <li className="breadcrumb-item total active" aria-current="page">Shipping</li>
                                        <li className="breadcrumb-item total active" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h4 className='title'>Contact Information</h4>
                                <p className='user-detail total'>
                                    Navdeep Dahiya (ad@gamil.com)
                                </p>
                                <h4 className='mb-3'>Shipping Address</h4>
                                <form action='' className='d-flex flex-wrap justify-content-between gap-15'>
                                    <div className='w-100'>
                                        <select className='form-control form-select' placeholder=' Saved address' name=''>
                                            <option value='' selected disabled>
                                                Use a new address
                                            </option>
                                        </select>
                                    </div>
                                    <div className='w-100'>
                                        <select className='form-control form-select' placeholder='Country/Region' name=''>
                                            <option value='' selected disabled>
                                                United States
                                            </option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input className='form-control' name='first_name' type='text' placeholder='First Name' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input className='form-control' name='last_name' type='text' placeholder='Last Name' />
                                    </div>
                                    <div className='w-100'>
                                        <input className='form-control' name='address' type='text' placeholder='Address' />
                                    </div>
                                    <div className='w-100'>
                                        <input className='form-control' name='Apartment' type='text' placeholder='Apartment, suite, etc' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input className='form-control' name='city' type='text' placeholder='City' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select className='form-control form-select' placeholder='State' name=''>
                                            <option value='' selected disabled>
                                                Indiana
                                            </option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input className='form-control' name='zip_code' type='text' placeholder='Zip Code' />
                                    </div>
                                    <div className='w-100'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <Link to='/cart' className='text-dark'>
                                                <IoReturnDownBack className='me-2' /> Return to Cart
                                            </Link>
                                            <Link to='/store' className='button'>Continue to Shopping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='border-bottom py-4'>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className='w-75 d-flex gap-10'>
                                        <div className='w-25 position-relative'>
                                            <span
                                                style={{ top: "-10px", right: "-10px" }}
                                                className='badge bg-secondary text-white rounded-circle position-absolute'>1</span>
                                            <img src='/images/watch.jpg' className='img-fluid' alt='watch' />
                                        </div>
                                        <div className='ms-2'>
                                            <h5 className='title'>Watch</h5>
                                            <p>Size: M</p>
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <h5>$ 199</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='total'>Sub Total</p>
                                    <p className='total-price'>$ 190.00</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='total'>Shipping</p>
                                    <p className='total-price'>$ 100.00</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center py-4'>
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>$ 290.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;