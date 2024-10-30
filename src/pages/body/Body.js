import React from 'react';
import '../body/Body.css';
import FaqSection from '../faqsection/FaqSection';
import Pexemas from '../../images/massages.png';
import Elly from '../../images/elly.png';
import Karoli from '../../images/karoli.png';
import Book from '../../images/book.png';
import BodyImage from '../../images/body.png';

const Body = () => {
    return (
        <div className="body-page">
            <div className="body-the-service-section">
                <h2 className="body-service-title">Body Treatments</h2>
                <img src={BodyImage} alt="Service Promotion" className="body-service-image" /> 
            </div>

            <div className="body-programs-container">
                <div className="body-programs-right">
                    <div className="body-program">
                        <h2 className="program-title">2 Day Programs</h2>
                        <span className="program-price">25$</span>
                        <p className="program-description">Body treatments that include 1.5 hour full body massage, hydrating facial and gel manicure. (5 hours)</p>
                    </div>
                    <div className="body-program">
                        <h2 className="program-title">Body Programs for Couple</h2>
                        <span className="program-price">25$</span>
                        <p className="program-description">Body treatments that include 1.5 hour full body massage, hydrating facial and gel manicure. (5 hours)</p>
                    </div>
                    <div className="body-program">
                        <h2 className="program-title">Ayurvedic Body Program</h2>
                        <span className="program-price">49$</span>
                        <p className="program-description">An Ayurvedic therapist focuses on clearing the energy channels in the body, moving and dislodging toxins, and balancing the chakras. (4 hours)</p>
                    </div>
                    <div className="body-program">
                        <h2 className="program-title">Aroma Therapy</h2>
                        <span className="program-price">59$</span>
                        <p className="program-description">This program includes full body aroma massage and facial. (3 hours)</p>
                    </div>
                    <div className="body-program">
                        <h2 className="program-title">Body Relaxation</h2>
                        <span className="program-price">47$</span>
                        <p className="program-description">Body treatments that include 1.5 hour full body massage, hydrating facial and gel manicure. (5 hours)</p>
                    </div>
                </div>
                <div className="body-programs-left">
                    <div className="image-container">
                        <img src={Pexemas} alt="Relaxing body treatment environment" className="body-image-large" />
                        <img src={Elly} alt="Aromatic body treatments" className="body-image-small" />
                        <img src={Karoli} alt="Luxury body products" className="body-image-small" />
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

export default Body;
