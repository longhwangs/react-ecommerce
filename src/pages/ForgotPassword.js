import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import CustomInput from '../components/CustomInput';

const ForgotPassword = () => {
    return (
        <div>
            <Meta title="Forgot Password" />
            <BreadCrumb title='Forgot Password' />
            <div className='login-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='rol-12'>
                            <div className='login-card'>
                                <h3 className='text-center mb-3'>Reset your password</h3>
                                <p className='text-center mt-2 mb-3'>
                                    We will send you an email to reset your password
                                </p>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <CustomInput type='text' name='email' className='form-control' placeholder='Email' />
                                    <div>
                                        <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                                            <button className='button border-0' type='submit'>Submit</button>
                                            <Link to='/login'>Cancel</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;