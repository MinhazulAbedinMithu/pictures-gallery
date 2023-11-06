import React, { useRef } from "react";
import "./style.css";
import imgAdd from "../../images/add.png";

const AddImageCard = ({ images, setImages }) => {
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    console.log("clicked");
    const file = event.target.files[0];
    if (file) {
      const newImage = {
        id: Date.now().toString(),
        url: URL.createObjectURL(file),
        isSelected: false,
      };
      setImages([...images, newImage]);
    }
  };

  return (
    <div className=" add-image-card">
      {" "}
      <label>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
        <img src={imgAdd} alt="Add" />
        <p>Add Images</p>
      </label>
    </div>
  );
};

export default AddImageCard;
