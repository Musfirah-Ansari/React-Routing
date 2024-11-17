import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Contactcomp = () => {
    return (
        <div style={{ backgroundColor: '#f0f8ff', padding: '50px 20px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', color: '#333', fontWeight: '600', marginBottom: '30px' }}>
                Get in Touch with Us
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#777', maxWidth: '800px', margin: 'auto', marginBottom: '40px' }}>
                We're here to help! Fill out the form below and we will get back to you as soon as possible.
                Feel free to reach out with any questions or feedback you may have.
            </p>

            <Form style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '30px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', maxWidth: '700px', margin: 'auto' }}>
                <Row style={{ marginBottom: '20px' }}>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label style={{ fontSize: '1.1rem', color: '#333' }}>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            style={{ padding: '15px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ddd' }}
                        />
                    </Form.Group>
                </Row>

                <Row style={{ marginBottom: '20px' }}>
                    <Form.Group className="mb-3" controlId="formGridContactNumber">
                        <Form.Label style={{ fontSize: '1.1rem', color: '#333' }}>Contact Number</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="Enter your contact number"
                            style={{ padding: '15px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ddd' }}
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox" style={{ textAlign: 'left' }}>
                    <Form.Check
                        type="checkbox"
                        label="I agree to the T & C listed below"
                        style={{ fontSize: '1rem' }}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    style={{
                        backgroundColor: '#4CAF50',
                        border: 'none',
                        padding: '15px 30px',
                        fontSize: '1.1rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        width: '100%',
                        transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
                >
                    Contact Us Now
                </Button>
            </Form>
        </div>
    );
};

export default Contactcomp;