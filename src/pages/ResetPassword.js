import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import CustomInput from '../components/CustomInput';

const ResetPassword = () => {
    return (
        <div>
            <Meta title="Reset Password" />
            <BreadCrumb title='Reset Password' />
            <div className='login-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='rol-12'>
                            <div className='login-card'>
                                <h3 className='text-center mb-3'>Reset Password</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <CustomInput type='password' name='current_password' className='form-control' placeholder='Current Password' />
                                    <CustomInput type='password' name='password' className='form-control' placeholder='Password' />
                                    <CustomInput type='password' name='password_confirm' className='form-control' placeholder='Password Confirm' />
                                    <div>
                                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                            <button className='button border-0' type='submit'>Reset</button>
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

export default ResetPassword;