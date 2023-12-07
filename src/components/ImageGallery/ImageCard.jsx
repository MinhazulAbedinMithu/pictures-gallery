import React from "react";
import "./style.css";

const ImageCard = ({ image, onSelect }) => {
  const { id, url, isSelected } = image;
  const handleCheckboxChange = () => {
    onSelect(id);
  };
  return (
    <>
      {url ? (
        <>
          <input
            type="checkbox"
            checked={isSelected ? true : false}
            onChange={handleCheckboxChange}
            className="checkbox"
          />
          <img src={url} alt={id} />
        </>
      ) : (
        <div>
          <h4>Loading</h4>
        </div>
      )}
    </>
  );
};

export default ImageCard;
