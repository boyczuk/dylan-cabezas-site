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

    const agencies = [
        { name: "WANT Management", link: "https://www.wantmanagement.com/models/men/597-dylan/", flag: "https://flagcdn.com/w20/ca.png", location: "Toronto, Canada" },
        { name: "Crawford Models", link: "https://www.crawfordmodels.com/model/dylan-cabezas/", flag: "https://flagcdn.com/w20/us.png", location: "New York, USA" },
        { name: "I Love Models Management", link: "https://www.ilovemodelsmanagement.com/model/1155/dylan-cabezas", flag: "https://flagcdn.com/w20/it.png", location: "Milan, Italy" }
    ];

    return (
        <>
            <div className="page">
                <ImageGallery images={images} />

                <div className='agency-list'>
                    <h1>Agencies</h1>
                    {agencies.map((agency, index) => (
                        <div key={index} className="agency-item">

                            <a href={agency.link} className="agency-link" target="_blank" rel="noopener noreferrer">{agency.name}</a>
                             {agency.location}
                            <img src={agency.flag} alt={agency.location} style={{ marginLeft: '10px' }} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;