import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CollegeSection = () => {
  // Sample carousel images - replace with your actual images
  const carouselImages = [
    {
      src: './src/images/1741581292216.jpg',
      alt: 'First slide',
      caption: 'First Slide Caption'
    },
    {
      src: './src/images/1741581292500.jpg',
      alt: 'Second slide',
      caption: 'Second Slide Caption'
    },
    {
      src: './src/images/1741581292597.jpg',
      alt: 'Third slide',
      caption: 'Third Slide Caption'
    }
  ];

  return (
    <Container fluid className="college-section">
      {/* Carousel Section */}
      <Row className="mb-4">
        <Col>
          <Carousel>
            {carouselImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>{image.caption}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      {/* Two Subsections */}
      <Row className="mt-4">
        {/* Left Section - Text Content */}
        <Col md={6} className="left-section p-4">
          <h2>About Our College</h2>
          <p className="mt-3">
          Dr. D.Y. Patil College of Engineering (DYPCOE) is a prominent engineering institution located in Pune, India. Established in 1984, it operates under the umbrella of the Dr. D.Y. Patil Educational Complex in Akurdi, Pune. The college is affiliated with Savitribai Phule Pune University and is accredited by the National Assessment and Accreditation Council (NAAC) with an 'A' grade.
          </p>
          <p>
          The college is situated within the D.Y. Patil Educational Complex, which houses multiple educational institutions. The campus is equipped with modern facilities, including well-equipped laboratories, libraries, and recreational areas, providing a conducive environment for both academic pursuits and extracurricular activities
          </p>
        </Col>

        {/* Right Section - MOU Display */}
        <Col md={6} className="right-section p-4">
          <div className="mou-container">
            {/* Add your MOU images or content here */}
            <img 
              src="/src/images/1741581292597.jpg" 
              alt="MOU 1" 
              className="mou-image mb-3"
            />
          
          </div>
        </Col>
      </Row>

      {/* CSS Styles */}
      <style jsx>{`
        .college-section {
          padding: 0px;
        }
        
        .left-section {
          background-color: #f8f9fa;
          border-radius: 8px;
        }
        
        .right-section {
          background-color: #f8f9fa;
          border-radius: 8px;
        }
        
        .mou-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .mou-image {
          width: 100%;
          max-height: 200px;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
      `}</style>
    </Container>
  );
};

export default CollegeSection; 