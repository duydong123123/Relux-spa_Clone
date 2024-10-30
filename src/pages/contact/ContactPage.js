import React from 'react';
import './ContactPage.css';
import Image1 from '../../images/image1.jpg';
import Image2 from '../../images/image2.jpg';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>

      {/* Thông tin Liên hệ */}
      <div className="contact-info">
        <h3>Our Office</h3>
        <p>Address: 123 Main St, Cityname, Country</p>
        <p>Phone: +1 234 567 890</p>
        <p>Email: contact@relux.com</p>
        <p>Working Hours: Monday - Friday, 9:00 AM - 6:00 PM</p>
      </div>

      {/* Form Liên hệ */}
      <h3>Get in Touch</h3>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="topic">Topic:</label>
        <select id="topic" name="topic">
          <option value="general">General Inquiry</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
        </select>

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Submit</button>
      </form>

      {/* Đội ngũ hỗ trợ */}
      <div className="support-team">
        <h3>Meet Our Support Team</h3>
        <div className="team-member">
          <img src={Image1} alt="Support team member 1" />
          <p><strong>Jane Doe</strong> - Customer Support Lead</p>
          <button>Email Jane</button>
        </div>
        <div className="team-member">
          <img src={Image2} alt="Support team member 2" />
          <p><strong>John Smith</strong> - Technical Support</p>
          <button>Email John</button>
        </div>
      </div>

      {/* Đặt Lịch hẹn */}
      <div className="appointment">
        <h3>Schedule an Appointment</h3>
        <form>
          <label htmlFor="appointment-date">Choose a Date:</label>
          <input type="date" id="appointment-date" name="appointment-date" required />

          <label htmlFor="appointment-time">Choose a Time:</label>
          <input type="time" id="appointment-time" name="appointment-time" required />

          <button type="submit">Book Appointment</button>
        </form>
      </div>

      {/* Phản hồi */}
      <div className="feedback">
        <h3>Customer Feedback</h3>
        <textarea placeholder="Leave your feedback here..."></textarea>
        <button type="submit">Submit Feedback</button>
      </div>

      {/* Văn hóa công ty */}
      <div className="about-company">
        <h3>About Our Company</h3>
        <p>At ReLux, we believe in providing top-notch customer service and innovative solutions. With over a decade of experience, our team is dedicated to making every interaction a positive one.</p>
      </div>

      {/* Cập nhật từ Mạng xã hội */}
      <div className="social-updates">
        <h3>Latest Social Updates</h3>
        <p>Stay connected with us on social media for the latest news and offers.</p>
        <ul>
          <li><a href="https://facebook.com/relux" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com/relux" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com/relux" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>

      {/* Tin tức và Thông báo */}
      <div className="news-updates">
        <h3>Company News & Announcements</h3>
        <ul>
          <li><strong>New Branch Opening</strong> - We are excited to announce our new branch opening in Cityname!</li>
          <li><strong>Holiday Hours</strong> - Please note our special holiday hours on Dec 24th - Dec 26th.</li>
          <li><strong>Customer Appreciation Month</strong> - Special discounts and events all month long!</li>
        </ul>
      </div>

      {/* Đánh giá khách hàng */}
      <div className="customer-reviews">
        <h3>Customer Reviews</h3>
        <p>"Great service and friendly staff! Highly recommend!" - <em>Emily R.</em></p>
        <p>"I had a wonderful experience, will definitely come back." - <em>Michael T.</em></p>
        <p>"Exceptional quality and attention to detail." - <em>Sophia W.</em></p>
      </div>
    </div>
  );
};

export default ContactPage;
