import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import CustomInput from '../components/CustomInput';

const Signup = () => {
    return (
        <div>
            <Meta title="Sign Up" />
            <BreadCrumb title='Sign Up' />
            <div className='login-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='rol-12'>
                            <div className='login-card'>
                                <h3 className='text-center mb-3'>Signup</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <CustomInput type='text' name='name' className='form-control' placeholder='Name' />
                                    <CustomInput type='email' name='email' className='form-control' placeholder='Email' />
                                    <CustomInput type='text' name='phone_number' className='form-control' placeholder='Phone number' />
                                    <CustomInput type='password' name='password' className='form-control' placeholder='Password' />
                                    <div>
                                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                            <button className='button border-0' type='submit'>Create</button>
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

export default Signup;