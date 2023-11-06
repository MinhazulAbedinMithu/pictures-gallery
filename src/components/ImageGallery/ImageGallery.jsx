import React, { useState } from "react";
import "./style.css";
import ImageCard from "./ImageCard";
import AddImageCard from "./AddImageCard";

import imgOne from "../../images/image-1.webp";
import imgTwo from "../../images/image-2.webp";
import imgThree from "../../images/image-3.webp";
import imgFour from "../../images/image-4.webp";
import imgFive from "../../images/image-5.webp";
import imgSix from "../../images/image-6.webp";
import imgSeven from "../../images/image-7.webp";
import imgEight from "../../images/image-8.webp";
import imgNine from "../../images/image-9.webp";
import imgTen from "../../images/image-10.jpeg";
import imgZero from "../../images/image-11.jpeg";

const ImageGallery = () => {
  const [images, setImages] = useState([
    { id: "16992566333051", url: imgZero, isSelected: false },
    { id: "16992566333052", url: imgOne, isSelected: false },
    { id: "16992566333053", url: imgTwo, isSelected: false },
    { id: "16992566333054", url: imgThree, isSelected: false },
    { id: "16992566333055", url: imgFour, isSelected: false },
    { id: "16992566333056", url: imgFive, isSelected: false },
    { id: "16992566333057", url: imgSix, isSelected: false },
    { id: "16992566333058", url: imgSeven, isSelected: false },
    { id: "16992566333059", url: imgEight, isSelected: false },
    { id: "169925663330510", url: imgNine, isSelected: false },
    { id: "169925663330511", url: imgTen, isSelected: false },
  ]);
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
