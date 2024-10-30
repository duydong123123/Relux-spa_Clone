import React from 'react';
import '../pageimages/Pagesimage.css';
import Spa from '../../images/spa.png';
import Elly from '../../images/elly.png';
import Homeimage from '../../images/homeImage.png';
import Mare from '../../images/mare.png';
import Cot from '../../images/cot.png';
import Faci from '../../images/facialTreatment.png';
import Model from '../../images/modelImage.png';
import Mahdi from '../../images/mahdi.png';
import Dogu from '../../images/dogu.png';
import Pecel from '../../images/pexemas.png';
import Facial from '../../images/facial.png';
import Teke from '../../images/teke.png';
import Cotton from '../../images/cotton.png';

const Pagesimage = () => {
  return (
    <div className="pagesimage-page">
      <div className="pagesimage-the-service-section">
        <h2 className="pagesimage-service-title">Gallery</h2>
        <img src={Spa} alt="Service Promotion" className="pagesimage-service-image" />
      </div>
      <div className="gallery-grid">
        {/* Thứ tự sắp xếp theo đúng ảnh mẫu */}
        <img src={Elly} alt="Image 1" className="gallery-image" />
        <img src={Cotton} alt="Image 2" className="gallery-image" />
        <img src={Homeimage} alt="Image 3" className="gallery-image" />
        <img src={Mare} alt="Image 4" className="gallery-image" />

        <img src={Teke} alt="Image 5" className="gallery-image" />
        <img src={Mahdi} alt="Image 6" className="gallery-image" />
        <img src={Cot} alt="Image 7" className="gallery-image" />
        <img src={Model} alt="Image 8" className="gallery-image" />

        <img src={Dogu} alt="Image 9" className="gallery-image" />
        <img src={Pecel} alt="Image 10" className="gallery-image" />
        <img src={Facial} alt="Image 11" className="gallery-image" />
        <img src={Faci} alt="Image 12" className="gallery-image" />
      </div>
    </div>
  );
};

export default Pagesimage;
