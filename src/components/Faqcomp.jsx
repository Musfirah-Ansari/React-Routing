import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';

const Faqcomp = () => {
    return (
        <>
            <Container style={{ maxWidth: '800px', marginTop: '50px', padding: '20px' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    textAlign: 'center',
                    marginBottom: '30px',
                    fontWeight: '700',
                    color: '#2c3e50'
                }}>
                    Frequently Asked Questions
                </h1>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" style={{ borderRadius: '8px', marginBottom: '10px' }}>
                        <Accordion.Header style={{
                            backgroundColor: '#3498db',
                            color: 'white',
                            fontSize: '1.2rem',
                            fontWeight: '500',
                            padding: '15px 20px',
                            borderRadius: '8px'
                        }}>
                            What is Lorem Ipsum?
                        </Accordion.Header>
                        <Accordion.Body style={{ padding: '20px', fontSize: '1rem', backgroundColor: '#ecf0f1' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" style={{ borderRadius: '8px', marginBottom: '10px' }}>
                        <Accordion.Header style={{
                            backgroundColor: '#3498db',
                            color: 'white',
                            fontSize: '1.2rem',
                            fontWeight: '500',
                            padding: '15px 20px',
                            borderRadius: '8px'
                        }}>
                            Why do we use it?
                        </Accordion.Header>
                        <Accordion.Body style={{ padding: '20px', fontSize: '1rem', backgroundColor: '#ecf0f1' }}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" style={{ borderRadius: '8px', marginBottom: '10px' }}>
                        <Accordion.Header style={{
                            backgroundColor: '#3498db',
                            color: 'white',
                            fontSize: '1.2rem',
                            fontWeight: '500',
                            padding: '15px 20px',
                            borderRadius: '8px'
                        }}>
                            Where can I get some?
                        </Accordion.Header>
                        <Accordion.Body style={{ padding: '20px', fontSize: '1rem', backgroundColor: '#ecf0f1' }}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </>
    );
}

export default Faqcomp;