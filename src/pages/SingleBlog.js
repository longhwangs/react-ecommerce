import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'

const SingleBlog = () => {
    return (
        <div>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title='Dynamic Blog Name' />
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='single-blog-card'>
                                <Link to="/blogs" className='d-flex align-items-center gap-10'>
                                    <BsArrowLeft className='fs-4' />Go back to Blogs
                                </Link>
                                <h3>A Beautiful Sunday Morning Renaissance</h3>
                                <img src='/images/main-banner.jpg' alt='blog' className='img-fluid w-100 my-4' />
                                <p>
                                    You're only as good as your collection, which is an enormous pressure. I think there is something about luxury - it's not something people need, but it's what they want. It really pulls at their heart. I have a fantastic relationship with money.Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium comodo inceptos cum conditmentum placerat diam venenatis blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;