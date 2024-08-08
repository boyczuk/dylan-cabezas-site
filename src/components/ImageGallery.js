import React, { useRef, useEffect } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const gallery = galleryRef.current;
        let isDragging = false;
        let startX;
        let scrollLeft;

        const onMouseDown = (e) => {
            isDragging = true;
            startX = e.pageX - gallery.offsetLeft;
            scrollLeft = gallery.scrollLeft;
            gallery.style.cursor = 'grabbing';
            gallery.style.userSelect = 'none';
        };

        const onMouseUp = () => {
            isDragging = false;
            gallery.style.cursor = 'grab';
            gallery.style.userSelect = 'auto';
        };

        const onMouseLeave = () => {
            isDragging = false;
            gallery.style.cursor = 'grab';
        };

        const onMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - gallery.offsetLeft;
            const walk = (x - startX) * 2; // Adjust the multiplying factor for sensitivity
            gallery.scrollLeft = scrollLeft - walk;
        };

        gallery.addEventListener('mousedown', onMouseDown);
        gallery.addEventListener('mouseup', onMouseUp);
        gallery.addEventListener('mouseleave', onMouseLeave);
        gallery.addEventListener('mousemove', onMouseMove);

        // Cleanup function to remove event listeners
        return () => {
            gallery.removeEventListener('mousedown', onMouseDown);
            gallery.removeEventListener('mouseup', onMouseUp);
            gallery.removeEventListener('mouseleave', onMouseLeave);
            gallery.removeEventListener('mousemove', onMouseMove);
        };
    }, []); // Empty dependency array ensures the effect runs only once after the initial render

    const scrollGallery = (direction) => {
        const distance = 200; // Distance each click scrolls, adjust as needed
        if (direction === 'left') {
            galleryRef.current.scrollLeft -= distance;
        } else {
            galleryRef.current.scrollLeft += distance;
        }
    };

    return (
        <div className="image-gallery" ref={galleryRef}>
            {images.map((img, index) => (
                <img key={index} src={img.src} alt={img.alt} />
            ))}
           
        </div>
    );
};

export default ImageGallery;
