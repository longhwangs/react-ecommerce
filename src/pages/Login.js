import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import CustomInput from '../components/CustomInput';

const Login = () => {
    return (
        <div>
            <Meta title="Login" />
            <BreadCrumb title='Login' />
            <div className='login-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='rol-12'>
                            <div className='login-card'>
                                <h3 className='text-center mb-3'>Login</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <CustomInput type='text' name='email' className='form-control' placeholder='Email' />
                                    <CustomInput type='password' name='password' className='form-control' placeholder='Password' />
                                    <div>
                                        <div className='d-flex flex-column gap-15'>
                                            <Link to='/forgot-password'>Forgot Password ?</Link>
                                            <Link to='/reset-password'>Reset Password ?</Link>
                                        </div>
                                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                            <button className='button border-0' type='submit'>Login</button>
                                            <Link to='/sign-up' className='button signup'>Sign Up</Link>
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

export default Login;