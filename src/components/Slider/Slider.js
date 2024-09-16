import React, { useState } from 'react';
//import './ImageSlider.css'; // Assuming you have a separate CSS file for styling

const images = [
    'https://archicgi.com/wp-content/uploads/2022/09/3d-interior-visualization-modern-living-room.jpg',
    'https://archicgi.com/wp-content/uploads/2022/09/3d-interior-visualization-spacious-room.jpg',
    'https://archicgi.com/wp-content/uploads/2019/12/3d-rendering-3d-interior-visualization-5-key-elements-of-scene-view03office-lobby-design-view.jpg',
    'https://archicgi.com/wp-content/uploads/2022/09/3d-interior-visualization-luxurious-design.jpg',
     'https://archicgi.com/wp-content/uploads/2022/09/3d-interior-visualization-modern-kitchen.jpg',
      'https://archicgi.com/wp-content/uploads/2022/09/3d-interior-visualization-stylish-space.jpg',

     
];

function ImageSlider() {


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNextSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const getLeftImageIndex = () => {
        return currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    };

    const getRightImageIndex = () => {
        return currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    };
   

    return (
        
        <div className="slider-container">
            <div
                className="background left-background"
                style={{ backgroundImage: `url(${images[getLeftImageIndex()]})` }}
            ></div>
            <div className="foreground">
                <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="foreground-image"
                />
            </div>
            <div
                className="background right-background"
                style={{ backgroundImage: `url(${images[getRightImageIndex()]})` }}
            ></div>
            <div className="navigation">
                <button onClick={goToPreviousSlide}>Previous</button>
                <button onClick={goToNextSlide}>Next</button>
            </div>
        </div>
    );
}

export default ImageSlider;


///fdgdfgdfgdfgdf