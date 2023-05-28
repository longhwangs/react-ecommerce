import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const TernAndConditions = () => {
    return (
        <div>
            <Meta title={"Tern And Conditions"} />
            <BreadCrumb title='Tern And Conditions' />
            <section className='policy-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='policy'></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TernAndConditions;