import React from "react";
import "./style.css";

const ImageCard = ({ image, onSelect }) => {
  const { id, url, isSelected } = image;
  const handleCheckboxChange = () => {
    onSelect(id);
  };
  return (
    <>
      <input
        type="checkbox"
        checked={isSelected ? true : false}
        onChange={handleCheckboxChange}
        className="checkbox"
      />
      <img src={url} alt={id} />
    </>
  );
};

export default ImageCard;
