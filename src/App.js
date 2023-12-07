import ImageGallery from "./components/ImageGallery/ImageGallery";
import imgOne from "./images/image-1.webp";
import imgTwo from "./images/image-2.webp";
import imgThree from "./images/image-3.webp";
import imgFour from "./images/image-4.webp";
import imgFive from "./images/image-5.webp";
import imgSix from "./images/image-6.webp";
import imgSeven from "./images/image-7.webp";
import imgEight from "./images/image-8.webp";
import imgNine from "./images/image-9.webp";
import imgTen from "./images/image-10.jpeg";
import imgZero from "./images/image-11.jpeg";
import { useState } from "react";
import LoadingScreen from "./components/Loading/Loading";
const imgList = [
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
];
function App() {
  const [images, setImages] = useState([...imgList]);
  return (
    <div>
      {imgList.length > 9 ? (
        <ImageGallery images={images} setImages={setImages} />
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}

export default App;
