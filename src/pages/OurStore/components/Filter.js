import React from 'react';
import ReactStars from "react-rating-stars-component";
import Color from "../../../components/Color";

const Filter = () => {
    return (
        <div className='col-3'>
            <div className='filter-card mb-3'>
                <h5 className='filter-tilte'>Shop By Categories</h5>
                <div>
                    <ul className='ps-0'>
                        <li>Watch</li>
                        <li>TV</li>
                        <li>Camera</li>
                        <li>Laptop</li>
                    </ul>
                </div>
            </div>
            <div className='filter-card mb-3'>
                <h5 className='filter-tilte'>Filter By</h5>
                <div>
                    <div>
                        <h5 className='sub-title'>Availablity</h5>
                        <div>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type="checkbox"
                                    value=""
                                    id=""
                                />
                                <label className='form-check-label' htmlFor=''>In Stock (1)</label>
                            </div>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type="checkbox"
                                    value=""
                                    id=""
                                />
                                <label className='form-check-label' htmlFor=''>Out of Stock (0)</label>
                            </div>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type="checkbox"
                                    value=""
                                    id=""
                                    checked
                                />
                                <label className='form-check-label' htmlFor=''>In Stock</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className='sub-title'>Price</h5>
                        <div className='d-flex align-items-center gap-10'>
                            <div className="form-floating">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInputFrom"
                                    placeholder="From"
                                />
                                <label htmlFor="floatingInputFrom">From</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInputTo"
                                    placeholder="To"
                                />
                                <label htmlFor="floatingInputTo">To</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className='sub-title'>Colors</h5>
                        <div>
                            <Color />
                        </div>
                    </div>
                    <div>
                        <h5 className='sub-title'>Size</h5>
                        <div>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type="checkbox"
                                    value=""
                                    id=""
                                />
                                <label className='form-check-label' htmlFor=''>XL (1)</label>
                            </div>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type="checkbox"
                                    value=""
                                    id=""
                                />
                                <label className='form-check-label' htmlFor=''>L (1)</label>
                            </div>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type="checkbox"
                                    value=""
                                    id=""
                                />
                                <label className='form-check-label' htmlFor=''>S (1)</label>
                            </div>
                            <div className='form-check'>
                                <input
                                    className='form-check-input'
                                    type="checkbox"
                                    value=""
                                    id=""
                                />
                                <label className='form-check-label' htmlFor=''>M (1)</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='filter-card mb-3'>
                <h5 className='filter-tilte'>Product Tags</h5>
                <div>
                    <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Headphone</span>
                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Mobile</span>
                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Oppo</span>
                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Speaker</span>
                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Tablet</span>
                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Vivo</span>
                        <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Wire</span>
                    </div>
                </div>
            </div>
            <div className='filter-card mb-3'>
                <h5 className='filter-tilte'>Random Product</h5>
                <div>
                    <div className='random-products d-flex mt-3'>
                        <div className='w-30'>
                            <img src='images/speaker.jpg' alt='speaker' />
                        </div>
                        <div className='w-70'>
                            <h6>Kids Headphones Bulk 10 Pack Multi Colored For...</h6>
                            <ReactStars
                                count={5}
                                size={24}
                                value={3}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p>$100.00</p>
                        </div>
                    </div>
                    <div className='random-products d-flex mt-3'>
                        <div className='w-30'>
                            <img src='images/headphone.jpg' alt='headphone' />
                        </div>
                        <div className='w-70'>
                            <h6>Kids Headphones Bulk 10 Pack Multi Colored For...</h6>
                            <ReactStars
                                count={5}
                                size={24}
                                value={3}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p>$100.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;