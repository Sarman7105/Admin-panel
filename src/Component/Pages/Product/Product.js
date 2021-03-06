import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import Chart from '../../Chart/Chart'
import {productData} from '../../../DummyData'
import { Publish } from '@material-ui/icons';
const Product = () => {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={ productData } dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoKey">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoKey">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoKey">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoKey">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">

                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple Airpod" />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes"> Yes </option>
                            <option value="No"> No </option>
                        </select>
                        <label> Active</label>
                        <select name="active" id="active">
                            <option value="yes"> Yes </option>
                            <option value="No"> No </option>
                        </select>

                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish></Publish>
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Product;