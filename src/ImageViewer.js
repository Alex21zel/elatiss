// src/ImageViewer.js
import React, { useState, useEffect } from 'react';
import './ImageViewer.css';

const ImageViewer = () => {
    const [fullSizeImage, setFullSizeImage] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch the images from the public/images folder
        const fetchImages = async () => {
            const imageNames = [
                { thumb: 'image1.jpeg', full: 'full1.jpeg' },
                { thumb: 'image2.jpeg', full: 'full2.jpeg' },
                { thumb: 'image3.jpeg', full: 'full3.jpeg' },
                { thumb: 'image4.jpeg', full: 'full4.jpeg' },
                { thumb: 'image5.jpeg', full: 'full5.jpeg' },
                { thumb: 'image6.jpeg', full: 'full6.jpeg' }
            ]; // Add your image names here
            const imagePaths = imageNames.map(image => ({
                thumb: `${process.env.PUBLIC_URL}/images/${image.thumb}`,
                full: `${process.env.PUBLIC_URL}/images/${image.full}`
            }));
            setImages(imagePaths);
        };

        fetchImages();
    }, []);

    const handleImageClick = (fullImage) => {
        setFullSizeImage(fullImage);
    };

    const handleClose = () => {
        setFullSizeImage(null);
    };

    return (
        <div className="image-viewer">
            <div className="image-gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.thumb}
                        alt={`Thumbnail ${index}`}
                        onClick={() => handleImageClick(image.full)}
                        className="thumbnail"
                    />
                ))}
            </div>
            {fullSizeImage && (
                <div className="full-size-overlay" onClick={handleClose}>
                    <img src={fullSizeImage} alt="Full Size" className="full-size-image" />
                </div>
            )}
        </div>
    );
};

export default ImageViewer;
