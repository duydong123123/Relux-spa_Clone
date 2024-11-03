import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../images/Logo.png';
import calendarIcon from '../images/imageHeader.png';
import smallIcon from '../images/dropdown.png';

const Header = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    location: '',
    employee: '',
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
    setCurrentStep(1); // Reset to the first step when the panel opens
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (formData.service && formData.location && formData.employee) {
      setCurrentStep(2); // Move to the calendar step
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleDateClick = (date) => {
    if (date.getDay() !== 6 && date.getDay() !== 0) { // Disable weekends
      setSelectedDate(date);
      setSelectedTime(''); // Reset time selection when date changes
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  const handlePrevYear = () => {
    setCurrentYear(currentYear - 1);
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysArray = [];
    
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(new Date(currentYear, currentMonth, day));
    }

    return daysArray;
  };

  const getTimeSlots = () => {
    const dayOfWeek = selectedDate?.getDay();
    let slots = [];
    if (dayOfWeek === 1) {
      slots = ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30'];
    } else if (dayOfWeek >= 2 && dayOfWeek <= 5) {
      slots = [
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30'
      ];
    }
    return slots;
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="ReLux Logo" />
        <h1>ReLux</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/services">Services</Link>
            <img src={smallIcon} alt="Small Icon" className="small-icon" />
          </li>
          <li>
            <Link to="/pages">Pages</Link>
            <img src={smallIcon} alt="Small Icon" className="small-icon" />
          </li>
          <li><Link to="/contacts">Contact</Link></li>
        </ul>
      </nav>
      <button className="appointment-button" onClick={togglePanel}>Book an appointment</button>
      <div className="icon">
        <img src={calendarIcon} alt="Calendar Icon" width="24" height="24" />
      </div>

      <div className={`appointment-panel ${isPanelOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={togglePanel}>×</button>
        <h2>Make an Appointment</h2>

        {currentStep === 1 && (
          <form>
            <label>Service</label>
            <select name="service" value={formData.service} onChange={handleInputChange}>
              <option value="">— Select —</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
            </select>

            <label>Location</label>
            <select name="location" value={formData.location} onChange={handleInputChange}>
              <option value="">— Any —</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>

            <label>Employee</label>
            <select name="employee" value={formData.employee} onChange={handleInputChange}>
              <option value="">— Any —</option>
              <option value="employee1">Employee 1</option>
              <option value="employee2">Employee 2</option>
            </select>

            <button
              type="button"
              className="next-button"
              onClick={handleNext}
              disabled={!formData.service || !formData.location || !formData.employee}
            >
              Next
            </button>
          </form>
        )}

        {currentStep === 2 && (
          <div className="calendar-view">
            <div className="calendar-navigation">
              <button onClick={handlePrevYear}>&lt;&lt;</button>
              <button onClick={handlePrevMonth}>&lt;</button>
              <span>{`${currentMonth + 1} - ${currentYear}`}</span>
              <button onClick={handleNextMonth}>&gt;</button>
              <button onClick={handleNextYear}>&gt;&gt;</button>
            </div>
            <div className="calendar">
              <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
              {generateCalendarDays().map((date, index) => (
                <button
                  key={index}
                  className={`date-button ${selectedDate && date && selectedDate.toDateString() === date.toDateString() ? 'selected' : ''}`}
                  onClick={() => date && handleDateClick(date)}
                  disabled={!date || date.getDay() === 6 || date.getDay() === 0}
                >
                  {date ? date.getDate() : ''}
                </button>
              ))}
            </div>

            {selectedDate && (
              <div className="time-slots">
                {getTimeSlots().map((time) => (
                  <button
                    key={time}
                    className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => handleTimeClick(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}

            <button type="button" className="back-button" onClick={handleBack}>Back</button>
            <button
              type="button"
              className="next-button"
              onClick={() => alert(`Appointment set for ${selectedDate.toDateString()} at ${selectedTime}`)}
              disabled={!selectedDate || !selectedTime}
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
