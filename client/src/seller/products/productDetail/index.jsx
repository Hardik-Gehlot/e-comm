import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { fetchDataFromApi } from '../../../utils/Api';
import Navbar from "../../components/navbar"
import "./style.scss";
function index() {
    const { item } = useLocation().state;
    const [img, setImg] = useState(item?.images[0]);
    return (
        <div>
            <Navbar />
            <section className='contentWrapper'>
                <div className="headingSection">
                    <div className="name">{item?.name}</div>
                    <div className="actions">
                        <button className="btn">update</button>
                        <button className="btn">Delete</button>
                    </div>
                </div>
                <div className="midSection">
                    <div className="images">
                        {
                            item?.images.map((img, idx) => {
                                return <img key={idx} src={img} alt="img" className="img" onClick={() => setImg(img)} />
                            })
                        }
                    </div>
                    <div className="image">
                        <img src={img} alt="img" className="img" />
                    </div>
                    <div className="detail">
                        <div className="container desc">{item.description}</div>
                        <div className="container price">
                            <div className="discount">-{item.discount}%</div>
                            <div className="price"><span>₹</span>{item.price}</div><br />
                            <div className="mrp">M.R.P.: <span>₹{item.original_price}</span></div>
                        </div>
                        <div className="container quantity">Quantity: {item.quantity}</div>
                        <div className="container brandCategory">
                            <div className="brand">Brand: {item.brand}</div>
                            <div className="category">Category: {item.category}</div>
                        </div>
                        <div className="container spec">
                            {Object.entries(item.specification).map(([key, value]) => (
                                <div key={key}>
                                    <p>{key}: {value}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default index
