import React, { useState } from 'react';
import './style.scss';
import { fetchDataFromApi } from "../../../utils/Api"
import {getSeller} from "../../../utils/Storage"
import { useNavigate } from 'react-router-dom';
import Dialog from "../../components/dialogBox"
import {MdDelete} from "react-icons/md"

function Index() {
    const navigate = useNavigate();
    const [specifications, setSpecifications] = useState([]);
    const [images, setImages] = useState([]);
    const [showDialog,setShowDialog]=useState(false);
    const addSpecification = () => {
        const hasEmptyFields = specifications.some((spec) => spec.type === '' || spec.value === '');
        if (!hasEmptyFields) {
            setSpecifications([...specifications, { type: '', value: '' }]);
        }
    };
    const addImages = () => {
        setShowDialog(true);
    }
    const handleImageChange = (index, value) => {
        const updatedImage = [...images];
        updatedImage[index] = value;
        setImages(updatedImage);
    };
    const handleSpecificationChange = (index, field, value) => {
        const updatedSpecs = [...specifications];
        updatedSpecs[index][field] = value;
        setSpecifications(updatedSpecs);
    };

    async function handleForm(e) {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const description = e.target.elements.description.value;
        const category = e.target.elements.category.value;
        const brand = e.target.elements.brand.value;
        const price = parseInt(e.target.elements.price.value);
        const quantity = parseInt(e.target.elements.quantity.value);
        const discount = parseInt(e.target.elements.discount.value);
        const original_price = parseInt(e.target.elements.original_price.value);
        const imgEmptyFields = images.some((img) => img === '');
        const specEmptyFields = specifications.some((spec) => spec.type === '' || spec.value === '');
        const specification = specifications.reduce((acc, spec) => {
            acc[spec.type] = spec.value;
            return acc;
        }, {});
        const sellerInfo = getSeller();
        const seller = {
            id:sellerInfo._id,
            name:sellerInfo.shopName,
            type:sellerInfo.type
        }
        if (!imgEmptyFields && !specEmptyFields) {
            const data = {
                name,
                description,
                category,
                brand,
                price,
                quantity,
                discount,
                original_price,
                images,
                specification,
                seller
            };
            const result = await fetchDataFromApi("/seller/add_product", data, "POST");
            if (!result.success) {
                alert(result.message);
            } else {
                navigate("/seller");
            }
        }else{
            alert("Fields are empty")
        }
    }
    const hideDialog=()=>{
        setShowDialog(false);
    }
    const dialogValue=(value)=>{
        if(value!==""){
            setImages([...images, value])
        }
    }
    const deleteImage = (index) => {
        const filteredImages = images.filter((img, i) => i !== index);
        setImages(filteredImages);
      };
      

    return (
        <div>
            {showDialog ? <Dialog hideAction={hideDialog} dialogValue={dialogValue}/> : ""}
            <form onSubmit={handleForm}>
                <input type="text" name='name' placeholder="Name" />
                <br />
                <input type="text" name='description' placeholder="Description" />
                <br />
                <input type="text" name='category' placeholder="Category" />
                <br />
                <input type="text" name='brand' placeholder="Brand" />
                <br />
                <input type="number" name='price' placeholder="Price" />
                <br />
                <input type="number" name='quantity' placeholder="Quantity" />
                <br />
                <input type="number" name='discount' placeholder="Discount" />
                <br />
                <input type="number" name='original_price' placeholder="Original Price" />
                <br />
                <div className="imageContainer">
                    {images.map((img, index) => (
                        <div className="image" key={index}>
                            <img src={img} alt="image" className="img" />
                            <div className="deletebtn" onClick={()=>deleteImage(index)}><MdDelete/></div>
                        </div>
                    ))}
                    <button type="button" onClick={addImages}>
                        +
                    </button>
                </div>
                <br />
                <div className="specificationContainer">
                    {specifications.map((spec, index) => (
                        <div className="specification" key={index}>
                            <input
                                type="text"
                                value={spec.type}
                                placeholder="Type"
                                onChange={(e) => handleSpecificationChange(index, 'type', e.target.value)}
                            />
                            <input
                                type="text"
                                value={spec.value}
                                placeholder="Value"
                                onChange={(e) => handleSpecificationChange(index, 'value', e.target.value)}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addSpecification}>
                        Add specification
                    </button>
                </div>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Index;

