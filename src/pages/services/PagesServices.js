import React from 'react';
import './PageServices.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa, faBath, faHotTub, faSeedling } from '@fortawesome/free-solid-svg-icons';
import FaqSection from '../faqsection/FaqSection';

const PageServices = () => {
    const navigate = useNavigate();

    const handleServiceClick = (service) => {
        switch(service) {
            case 'spa':
                navigate('/spa-programs');
                break;
            case 'facials':
                navigate('/facial-treatments');
                break;
            case 'massages':
                navigate('/massage-therapy');
                break;
            case 'body':
                navigate('/body-treatments');
                break;
            default:
                break;
        }
    };

    return (
        <div className="services-container">
            <div className="service-header">
                <h1>Our Services</h1>
            </div>
            <div className="services">
                <div className="service-item" onClick={() => handleServiceClick('facials')}>
                    <div className="service-icon">
                        <FontAwesomeIcon icon={faSpa} />
                    </div>
                    <h3>Facials</h3>
                    <p>Our crazy-talented master stylists will connect with you on a personal level</p>
                </div>
                <div className="service-item" onClick={() => handleServiceClick('spa')}>
                    <div className="service-icon">
                        <FontAwesomeIcon icon={faBath} />
                    </div>
                    <h3>SPA Programs</h3>
                    <p>Our crazy-talented master stylists will connect with you on a personal level</p>
                </div>
                <div className="service-item" onClick={() => handleServiceClick('massages')}>
                    <div className="service-icon">
                        <FontAwesomeIcon icon={faHotTub} />
                    </div>
                    <h3>Massages</h3>
                    <p>Our crazy-talented master stylists will connect with you on a personal level</p>
                </div>
                <div className="service-item" onClick={() => handleServiceClick('body')}>
                    <div className="service-icon">
                        <FontAwesomeIcon icon={faSeedling} />
                    </div>
                    <h3>Body Treatments</h3>
                    <p>Our crazy-talented master stylists will connect with you on a personal level</p>
                </div>
            </div>
            <FaqSection />
        </div>
    );
};

export default PageServices;
