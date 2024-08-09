import './Home.css';
import ImageGallery from '../components/ImageGallery';
import modelling1 from '../assets/modellingtemp1.png';
import modelling2 from '../assets/modellingtemp2.png';
import modelling3 from '../assets/modellingtemp3.png';
import modelling4 from '../assets/modellingtemp4.png';

const Home = () => {
    const images = [
        { src: modelling3, alt: 'Description of image 2' },
        { src: modelling2, alt: 'Description of image 3' },
        { src: modelling4, alt: 'Description of image 4' },
        { src: modelling1, alt: 'Description of image 1' },
        { src: modelling2, alt: 'Description of image 2' },
        { src: modelling3, alt: 'Description of image 3' },
        { src: modelling4, alt: 'Description of image 4' },
    ];

    return (
        <>
            <div className="page">
                <ImageGallery images={images} />

                {/*<div className='agency-list'>
                    <h1>Agencies</h1>
                    <li>WANT Management</li>
                    <li>Crawford Models</li>
                    <li>I Love models Management</li>
                </div>*/}
            </div>
        </>
    )
}

export default Home;