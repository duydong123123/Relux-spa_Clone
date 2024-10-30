import React from 'react';
import '../spaprogram/SpaPrograms.css';
import FaqSection from '../faqsection/FaqSection';
import Pexe from '../../images/pexe.png';
import Cop from '../../images/cop.png';
import Karoli from '../../images/karoli.png';
import Book from '../../images/book.png';
import Spa from '../../images/spa.png';
const SpaPrograms = () => {
    return (
        <div className="spa-programs-page">

            <div className="spa-the-service-section">
                <h2 className="spa-service-title">Spa Programs</h2>
                <img src={Spa} alt="Service Promotion" className="spa-service-image" /> 
            </div>


            <div className="spa-programs-container">
                <div className="spa-programs-right">
                    <div className="spa-program">
                        <h2 className="program-title">2 Day Programs</h2>
                        <span className="program-price">25$</span>
                        <p className="program-description">Spa programs that include 1.5 hour full body massage, hydrating facial and gel manicure. (5 hours)</p>
                    </div>
                    <div className="spa-program">
                        <h2 className="program-title">Spa Programs for Couple</h2>
                        <span className="program-price">25$</span>
                        <p className="program-description">Spa programs that include 1.5 hour full body massage, hydrating facial and gel manicure. (5 hours)</p>
                    </div>
                    <div className="spa-program">
                        <h2 className="program-title">Ayurvedic Spa Program</h2>
                        <span className="program-price">49$</span>
                        <p className="program-description">An Ayurvedic therapist focuses on clearing the energy channels in the body, moving and dislodging toxins, and balancing the chakras. (4 hours)</p>
                    </div>
                    <div className="spa-program">
                        <h2 className="program-title">Aroma Therapy</h2>
                        <span className="program-price">59$</span>
                        <p className="program-description">This program includes full body aroma massage and facial. (3 hours). Spa programs that include 1.5 hour full body massage</p>
                    </div>
                    <div className="spa-program">
                        <h2 className="program-title">Body Relaxation</h2>
                        <span className="program-price">47$</span>
                        <p className="program-description">Spa programs that include 1.5 hour full body massage, hydrating facial and gel manicure. (5 hours)</p>
                    </div>
                </div>
                <div className="spa-programs-left">
                    <div className="image-container">
                        <img src={Pexe} alt="Relaxing spa environment" className="spa-image-large" />
                        <img src={Cop} alt="Aromatic spa treatments" className="spa-image-small" />
                        <img src={Karoli} alt="Luxury spa products" className="spa-image-small" />
                    </div>
                </div>
            </div>

            <FaqSection />

            <div className="book-the-service-section">
                <h2 className="book-service-title">Book the Service Now</h2>
                <button className="book-appointment-button">Book an appointment</button>
                <img src={Book} alt="Service Promotion" className="book-service-image" />
            </div>
        </div>
    );
};

export default SpaPrograms;
