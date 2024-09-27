import './Photography.css';
import photo1 from '../assets/000001.JPG';
import photo2 from '../assets/000013.JPG';
import photo3 from '../assets/000016.JPG';
import photo4 from '../assets/000055270012.jpg';
import photo5 from '../assets/000055270026.jpg';
import photo6 from '../assets/001318370022.jpg';
import photo7 from '../assets/001318370026.jpg';
import photo8 from '../assets/001318370034.jpg';
import photo17 from '../assets/R1-09478-0000.JPG';
import photo18 from '../assets/R1-09478-0016.JPG';
import photo19 from '../assets/R1-09478-0034.JPG';

const photos = [
  { src: photo1, alt: "Photo 1", caption: "Osaka" },
  { src: photo19, alt: "Photo 19", caption: "Toronto" },

  { src: photo3, alt: "Photo 3", caption: "Kyoto" },
  { src: photo4, alt: "Photo 4", caption: "New York" },
  { src: photo5, alt: "Photo 5", caption: "New York" },
  { src: photo6, alt: "Photo 6", caption: "Toronto" },
  { src: photo7, alt: "Photo 7", caption: "Tokyo" },
  { src: photo8, alt: "Photo 8", caption: "Kyoto" },
  { src: photo2, alt: "Photo 2", caption: "Kyoto" },
];

const portraits = [
    { src: photo17, alt: "Portrait 1", caption: "New York" },
    { src: photo18, alt: "Portrait 2", caption: "Toronto" }
]

const Photography = () => {
    return (
        <div className="photography-container">
            <h1 className="photography-title">35mm</h1>
            <div className="photo-layout">
                <div className="photo-grid">
                    {photos.map((photo, index) => (
                        <div className="photo-card" key={index}>
                            <img src={photo.src} alt={photo.alt} className="photo-image" />
                        </div>
                    ))}
                </div>
                <div className="portrait-grid">
                    {portraits.map((photo, index) => (
                        <div className="portrait-card" key={index}>
                            <img src={photo.src} alt={photo.alt} className="portrait-image" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Photography;
