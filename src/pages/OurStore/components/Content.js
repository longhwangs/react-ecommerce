import React, { useState } from 'react';
import ProductCard from '../../../components/ProductCard';

const Content = () => {
    const [ grid, setGrid ] = useState(4);
    return (
        <div className='col-9'>
            <div className='filter-sort-grid mb-4'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center gap-10'>
                        <p className='mb-0 d-block' style={{ width: "160px" }}>Sort By:</p>
                        <select className='form-control form-select'>
                            <option value="manual">Featured</option>
                            <option value="best-selling" selected>Best selling</option>
                            <option value="title-ascending">Alphabetically, A-Z</option>
                            <option value="title-descending">Alphabetically, Z-A</option>
                            <option value="price-ascending">Price, low to high</option>
                            <option value="price-descending">Price, high to low</option>
                            <option value="created-ascending">Date, old to new</option>
                            <option value="created-descending">Date, new to old</option>
                        </select>
                    </div>

                    <div className='d-flex align-items-center gap-10'>
                        <p className='total-products mb-0'>21 Products</p>
                        <div className='d-flex align-items-center gap-10 grid'>
                            <img
                                onClick={() => {
                                    setGrid(3);
                                }}
                                className='d-block img-fluid'
                                src='images/gr4.svg' alt='total'
                            />
                            <img
                                onClick={() => {
                                    setGrid(4);
                                }}
                                className='d-block img-fluid'
                                src='images/gr3.svg'
                                alt='total'
                            />
                            <img
                                onClick={() => {
                                    setGrid(6);
                                }}
                                className='d-block img-fluid'
                                src='images/gr2.svg'
                                alt='total'
                            />
                            <img
                                onClick={() => {
                                    setGrid(12);
                                }}
                                className='d-block img-fluid'
                                src='images/gr.svg'
                                alt='total'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='products-list pb-5'>
                <div className='row'>
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
                </div>
            </div>
        </div>
    );
};

export default Content;