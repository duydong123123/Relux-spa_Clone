import React from 'react';
import '../massages/Massages.css';
import FaqSection from '../faqsection/FaqSection';
import Pexemas from '../../images/pexemas.png';
import Mare from '../../images/mare.png';
import Karoli from '../../images/karoli.png';
import Book from '../../images/book.png';
import Massage from '../../images/massages.png';

const Massages = () => {
    return (
        <div className="massages-page">
            <div className="massage-the-service-section">
                <h2 className="massage-service-title">Massages</h2>
                <img src={Massage} alt="Service Promotion" className="massage-service-image" /> 
            </div>

            <div className="massage-programs-container">
                <div className="massage-programs-right">
                    <div className="massage-program">
                        <h2 className="program-title">2 Day Programs</h2>
                        <span className="program-price">25$</span>
                        <p className="program-description">Massage programs that include 1.5 hour full body massage, hydrating facial and gel manicure. (5 hours)</p>
                    </div>
                    <div className="massage-program">
                        <h2 className="program-title">Massage Programs for Couple</h2>
                        <span className="program-price">25$</span>
                        <p className="program-description">Massage programs that include 1.5 hour full body massage, hydrating facial and gel manicure. (5 hours)</p>
                    </div>
                    <div className="massage-program">
                        <h2 className="program-title">Ayurvedic Massage Program</h2>
                        <span className="program-price">49$</span>
                        <p className="program-description">An Ayurvedic therapist focuses on clearing the energy channels in the body, moving and dislodging toxins, and balancing the chakras. (4 hours)</p>
                    </div>
                    <div className="massage-program">
                        <h2 className="program-title">Aroma Therapy</h2>
                        <span className="program-price">59$</span>
                        <p className="program-description">This program includes full body aroma massage and facial. (3 hours). Massage programs that include 1.5 hour full body massage</p>
                    </div>
                    <div className="massage-program">
                        <h2 className="program-title">Body Relaxation</h2>
                        <span className="program-price">47$</span>
                        <p className="program-description">Massage programs that include 1.5 hour full body massage, hydrating facial and gel manicure. (5 hours)</p>
                    </div>
                </div>
                <div className="massage-programs-left">
                    <div className="image-container">
                        <img src={Pexemas} alt="Relaxing massage environment" className="massage-image-large" />
                        <img src={Mare} alt="Aromatic massage treatments" className="massage-image-small" />
                        <img src={Karoli} alt="Luxury massage products" className="massage-image-small" />
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

export default Massages;
