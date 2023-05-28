import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Meta from '../../components/Meta';
import Content from './components/Content';
import Filter from './components/Filter';

const OurStore = () => {
    return (
        <div>
            <Meta title="Our Store" />
            <BreadCrumb title='Our Store' />
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <Filter />
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStore;