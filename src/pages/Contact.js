import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail, AiOutlineInfoCircle } from 'react-icons/ai'
import CustomInput from '../components/CustomInput';

const Contact = () => {
    return (
        <div>
            <Meta title="Contact Us" />
            <BreadCrumb title="Contact" />
            <div className='contact-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15767.249147414139!2d108.22862720609886!3d16.06441094145308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183afab4a42d%3A0xd52dbe9e28e83835!2sNovotel%20Danang%20Premier%20Han%20River!5e0!3m2!1sen!2s!4v1679720310719!5m2!1sen!2s"
                                width="600"
                                height="450"
                                className='border-0 w-100'
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            >
                            </iframe>
                        </div>
                        <div className='col-12 mt-5'>
                            <div className='contact-inner-wrapper d-flex justify-content-between'>
                                <div>
                                    <h3 className='contact-title mb-4'>Contact</h3>
                                    <form action='' className='d-flex flex-column gap-15'>
                                        <CustomInput type="text" className="form-control" placeholder='Name' />
                                        <CustomInput type="text" className="form-control" placeholder='Email *' />
                                        <CustomInput type="text" className="form-control" placeholder='Mobile Number' />
                                        <div>
                                            <textarea
                                                name=''
                                                id=''
                                                className='w-100 form-control'
                                                cols="30"
                                                rows="10"
                                                placeholder='Comments'
                                            ></textarea>
                                        </div>
                                        <div>
                                            <button className='button border-0'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className='contact-title mb-4'>Get in touch with us</h3>
                                    <div>
                                        <ul className='ps-0'>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <AiOutlineHome className='fs-5' />
                                                <address className='mb-0'>
                                                    Hno:277, Near village chopal, Mandaura, Sonipat
                                                </address>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <AiOutlinePhone className='fs-5' />
                                                <a href='tel:+84 373766915'>+84 373766915</a>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <AiOutlineMail className='fs-5' />
                                                <a href='mailto:longjinhofc@gmail.com'>longjinhofc@gmail.com</a>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'>
                                                <AiOutlineInfoCircle className='fs-5' />
                                                <p className='mb-0'>Monday - Friday 10 AM - 8 PM</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;