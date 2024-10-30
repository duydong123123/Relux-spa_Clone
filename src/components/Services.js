import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Services.css';

const servicesData = [
  {
    title: 'Facials',
    description: 'Our crazy-talented master stylists will connect with you on a personal level',
    icon: '💆‍♀️',
  },
  {
    title: 'SPA Programs',
    description: 'Our crazy-talented master stylists will connect with you on a personal level',
    icon: '🧖‍♀️',
  },
  {
    title: 'Massages',
    description: 'Our crazy-talented master stylists will connect with you on a personal level',
    icon: '💆‍♂️',
  },
  {
    title: 'Body Treatments',
    description: 'Our crazy-talented master stylists will connect with you on a personal level',
    icon: '👣',
  },
];

const Services = () => {
  const navigate = useNavigate();
  const handleServiceClick = (title) => {
    if (title === 'SPA Programs') {
      navigate('/spa-programs');
    }
  };

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div 
            className="service-card" 
            key={index}
            onClick={() => handleServiceClick(service.title)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
