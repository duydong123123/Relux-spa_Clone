import React from 'react';
import '../facials/Facials.css';
import FaqSection from '../faqsection/FaqSection';
import Faci from '../../images/facialTreatment.png';
import Cop from '../../images/cop.png';
import Dogu from '../../images/dogu.png';
import Book from '../../images/book.png';
import Facial from '../../images/facial.png';

const Facials = () => {
    return (
        <div className="facial-programs-page">

            <div className="facial-the-service-section">
                <h2 className="facial-service-title">Facials</h2>
                <img src={Facial} alt="Service Promotion" className="facial-service-image" /> 
            </div>

            <div className="facial-programs-container">
                <div className="facial-programs-right">
                    <div className="facial-program">
                        <h2 className="program-title">2 Day Programs</h2>
                        <span className="program-price">25$</span>
                        <p className="program-description">Facial programs that include 1.5 hour full body massage, hydrating facial and gel manicure. (5 hours)</p>
                    </div>
                    <div className="facial-program">
                        <h2 className="program-title">Facial Programs for Couple</h2>
                        <span className="program-price">25$</span>
                        <p className="program-description">Facial programs that include 1.5 hour full body massage, hydrating facial and gel manicure. (5 hours)</p>
                    </div>
                    <div className="facial-program">
                        <h2 className="program-title">Ayurvedic Facial Program</h2>
                        <span className="program-price">49$</span>
                        <p className="program-description">An Ayurvedic therapist focuses on clearing the energy channels in the body, moving and dislodging toxins, and balancing the chakras. (4 hours)</p>
                    </div>
                    <div className="facial-program">
                        <h2 className="program-title">Aroma Therapy</h2>
                        <span className="program-price">59$</span>
                        <p className="program-description">This program includes full body aroma massage and facial. (3 hours)</p>
                    </div>
                    <div className="facial-program">
                        <h2 className="program-title">Body Relaxation</h2>
                        <span className="program-price">47$</span>
                        <p className="program-description">Facial programs that include 1.5 hour full body massage, hydrating facial and gel manicure. (5 hours)</p>
                    </div>
                </div>
                <div className="facial-programs-left">
                    <div className="image-container">
                        <img src={Faci} alt="Relaxing facial environment" className="facial-image-large" />
                        <img src={Cop} alt="Aromatic facial treatments" className="facial-image-small" />
                        <img src={Dogu} alt="Luxury facial products" className="facial-image-small" />
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

export default Facials;
