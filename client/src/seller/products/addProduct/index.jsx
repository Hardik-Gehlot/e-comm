import React, { useState } from "react";
import "./style.scss";
import { fetchDataFromApi } from "../../../utils/Api";
import { getSeller } from "../../../utils/Storage";
import { useNavigate } from "react-router-dom";
import Dialog from "../../components/dialogBox";
import { MdDelete } from "react-icons/md";

function Index() {
  const navigate = useNavigate();
  const [specifications, setSpecifications] = useState([]);
  const [images, setImages] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const addSpecification = () => {
    const hasEmptyFields = specifications.some(
      (spec) => spec.type === "" || spec.value === ""
    );
    if (!hasEmptyFields) {
      setSpecifications([...specifications, { type: "", value: "" }]);
    }
  };
  const addImages = () => {
    setShowDialog(true);
  };
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
    const imgEmptyFields = images.some((img) => img === "");
    const specEmptyFields = specifications.some(
      (spec) => spec.type === "" || spec.value === ""
    );
    const specification = specifications.reduce((acc, spec) => {
      acc[spec.type] = spec.value;
      return acc;
    }, {});
    const sellerInfo = getSeller();
    const seller = {
      id: sellerInfo._id,
      name: sellerInfo.shopName,
      type: sellerInfo.type,
    };
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
        seller,
      };
      const result = await fetchDataFromApi(
        "/seller/add_product",
        data,
        "POST"
      );
      if (!result.success) {
        alert(result.message);
      } else {
        navigate("/seller");
      }
    } else {
      alert("Fields are empty");
    }
  }
  const hideDialog = () => {
    setShowDialog(false);
  };
  const dialogValue = (value) => {
    if (value !== "") {
      setImages([...images, value]);
    }
  };
  const deleteImage = (index) => {
    const filteredImages = images.filter((img, i) => i !== index);
    setImages(filteredImages);
  };

  return (
    <div className="addProductContainer">
      {showDialog ? (
        <Dialog hideAction={hideDialog} dialogValue={dialogValue} />
      ) : (
        ""
      )}
      <form className="addProduct" onSubmit={handleForm}>
        <h1>Add Product</h1>
        <div className="detailGroup">
          <div className="inputGroup">
            <label for="name">Name:</label> <br />
            <input
              class="inputField"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>

          <div className="inputGroup">
            <label for="description">Description:</label> <br />
            <input
              class="inputField"
              type="text"
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="inputGroup">
            <label for="category">Category:</label> <br />
            <input
              class="inputField"
              type="text"
              name="category"
              placeholder="Category"
            />
          </div>
          <div className="inputGroup">
            <label for="brand">Brand:</label> <br />
            <input
              class="inputField"
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </div>
        </div>

        <br />
        <div className="priceGroup">
          <div className="inputGroup">
            <label for="price">Price:</label> <br />
            <input
              class="inputField"
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="inputGroup">
            <label for="quantity">Quantity:</label> <br />
            <input
              class="inputField"
              type="number"
              name="quantity"
              placeholder="Quantity"
            />
          </div>
          <div className="inputGroup">
            <label for="discount">Discount:</label> <br />
            <input
              class="inputField"
              type="number"
              name="discount"
              placeholder="Discount"
            />
          </div>
          <div className="inputGroup">
            <label for="original_price">Original Price:</label> <br />
            <input
              class="inputField"
              type="number"
              name="original_price"
              placeholder="Original Price"
            />
          </div>
        </div>

        <br />
        <div className="imageContainer">
          {images.map((img, index) => (
            <div className="image" key={index}>
              <img src={img} alt="image" className="img" />
              <div className="deletebtn" onClick={() => deleteImage(index)}>
                <MdDelete />
              </div>
            </div>
          ))}
          <button type="button" onClick={addImages}>
            +
          </button>
        </div>
        <br />
        <div className="specificationContainer">
          <div className="spec">
            {specifications.map((spec, index) => (
              <div className="specification" key={index}>
                <input
                  type="text"
                  value={spec.type}
                  placeholder="Type"
                  className="inputField"
                  onChange={(e) =>
                    handleSpecificationChange(index, "type", e.target.value)
                  }
                />
                <input
                  type="text"
                  value={spec.value}
                  placeholder="Value"
                  className="inputField"
                  onChange={(e) =>
                    handleSpecificationChange(index, "value", e.target.value)
                  }
                />
                <div className="deletebtn">
                    <MdDelete/>
                </div>
              </div>
            ))}
          </div>
          <button type="button" onClick={addSpecification}>
            Add specification
          </button>
        </div>
        <br />
        <input type="submit" value="Add" className="addBtn" />
      </form>
    </div>
  );
}

export default Index;
