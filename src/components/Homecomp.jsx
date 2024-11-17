import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Homecomp = () => {
    const containerStyle = {
        padding: '50px 0',
        background: '#f4f4f9',
    };

    const textStyle = {
        paddingRight: '30px',
    };

    const headingStyle = {
        fontSize: '3rem',
        color: '#333',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    const descriptionStyle = {
        fontSize: '1.2rem',
        color: '#666',
        lineHeight: '1.6',
        marginBottom: '30px',
    };

    const buttonStyle = {
        fontSize: '1.1rem',
        padding: '10px 30px',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
    };

    const imageContainerStyle = {
        position: 'relative',
    };

    const imageStyle = {
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
    };

    const imageHoverStyle = {
        transform: 'scale(1.05)',
    };

    const [hovered, setHovered] = React.useState(false);

    return (
        <div style={containerStyle}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div style={textStyle}>
                            <h1 style={headingStyle}>Welcome to Musfirah's Website</h1>
                            <p style={descriptionStyle}>
                                Explore our content and discover amazing things. We aim to provide you with the best experience, so let’s get started!
                            </p>
                            <Button
                                variant="primary"
                                size="lg"
                                style={buttonStyle}
                                onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                                onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                            >
                                Get Started
                            </Button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div
                            style={imageContainerStyle}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <Image
                                src="https://images.pexels.com/photos/2321423/pexels-photo-2321423.jpeg"
                                fluid
                                style={{ ...imageStyle, ...(hovered ? imageHoverStyle : {}) }}
                                alt="Abstract Geometric Design in Blue and Purple"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Homecomp;