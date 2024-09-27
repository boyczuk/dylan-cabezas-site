import './Photography.css';

const photos = [
    { src: "path_to_image1.jpg", alt: "Photo 1", caption: "Beautiful Sunset" },
    { src: "path_to_image2.jpg", alt: "Photo 2", caption: "Mountain View" },
    { src: "path_to_image3.jpg", alt: "Photo 3", caption: "City Skyline" },
];

const Photography = () => {
    return (
        <div className="photography-container">
            <h1 className="photography-title">My Photography</h1>
            <p className="photography-description">
                Captured through the lens of a 35mm camera.
            </p>
            <div className="photo-grid">
                {photos.map((photo, index) => (
                    <div className="photo-card" key={index}>
                        <img src={photo.src} alt={photo.alt} className="photo-image" />
                        <div className="photo-caption">{photo.caption}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Photography;
