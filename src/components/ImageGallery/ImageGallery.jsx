import React, { useState } from "react";
import "./style.css";
import ImageCard from "./ImageCard";
import AddImageCard from "./AddImageCard";

const ImageGallery = ({ images, setImages }) => {
  const [selectedImages, setSelectedImage] = useState(0);
  const [draggedImage, setDraggedImage] = useState(null);
  const handleImageSelect = (id) => {
    const updatedImages = images.map((image) => {
      if (image.id === id) {
        image.isSelected
          ? setSelectedImage(selectedImages - 1)
          : setSelectedImage(selectedImages + 1);
        return { ...image, isSelected: !image.isSelected };
      }
      return image;
    });
    setImages(updatedImages);
  };

  const handleDeleteSelected = () => {
    const updatedImages = images.filter((image) => !image.isSelected);
    setImages(updatedImages);
    setSelectedImage(0);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.effectAllowed = "move";

    e.dataTransfer.setData("text/plain", index);
    setDraggedImage(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (index !== draggedImage) {
      const updatedElements = [...images];
      const [draggedItem] = updatedElements.splice(draggedImage, 1);
      updatedElements.splice(index, 0, draggedItem);
      setImages(updatedElements);
      setDraggedImage(index);
    }
  };

  const handleDragEnd = () => {
    setDraggedImage(null);
  };

  return (
    <div className="wrapper">
      <div className="header">
        {selectedImages ? (
          <>
            <p>
              <input type="checkbox" name="selected" id="selected" checked />{" "}
              {selectedImages} File Selected
            </p>
            <button
              onClick={handleDeleteSelected}
              style={{
                border: "none",
                backgroundColor: "transparent",
                fontSize: "16px",
                color: "red",
              }}
            >
              Delete files
            </button>
          </>
        ) : (
          <h4>Gallery</h4>
        )}
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <div
            key={image.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            className={`image-card ${image === draggedImage ? "dragging" : ""}
              ${image?.isSelected && "selected"}
            `}
            style={{
              gridColumn: index === 0 && "span 2",
              gridRow: index === 0 && "span 2",
            }}
          >
            <ImageCard image={image} onSelect={handleImageSelect} />
          </div>
        ))}
        <AddImageCard images={images} setImages={setImages} />
      </div>
    </div>
  );
};

export default ImageGallery;
