import React from 'react';
import { Container,Row,Col,ListGroup,Button } from 'react-bootstrap';
import { Facebook, Instagram,Twitter,Youtube } from 'react-bootstrap-icons';

export default function MyFooter() {
    return <footer className="d-flex bg-dark mt-4" >
        <Container className="mt-5 mb-2">
            <Row>
                
                    <Col className="col-12">
                     <ListGroup >
                         <ListGroup.Item className="footer-list bg-dark">
                            <Facebook className="mr-2" color="white" size={20}/>
                            <Instagram className="mr-2"  color="white" size={20}/>
                            <Twitter className="mr-2"  color="white" size={20}/>
                            <Youtube className="mr-2"  color="white" size={20}/>
                        </ListGroup.Item>
                        </ListGroup>

                        </Col>

                <Col className="md-3 bg-dark">
                    <ListGroup >
                        <ListGroup.Item className="footer-list bg-dark">Audio and Subtitle</ListGroup.Item>
                        <ListGroup.Item className="footer-list bg-dark">Media Center</ListGroup.Item>
                        <ListGroup.Item className="footer-list bg-dark">Privacy</ListGroup.Item>
                        <ListGroup.Item className="footer-list bg-dark">Contact US</ListGroup.Item>
                    </ListGroup>    
                </Col>
                <Col className="md-3">
                <ListGroup>
                    <ListGroup.Item className="footer-list bg-dark">Audio Description</ListGroup.Item>
                    <ListGroup.Item className="footer-list bg-dark">Investor Relation</ListGroup.Item>
                    <ListGroup.Item className="footer-list bg-dark">Legal Notice</ListGroup.Item>
                </ListGroup>    
                </Col>
                <Col className="md-3">
                <ListGroup>
                    <ListGroup.Item className="footer-list bg-dark">Help Centers</ListGroup.Item>
                    <ListGroup.Item className="footer-list bg-dark">Jobs</ListGroup.Item>
                    <ListGroup.Item className="footer-list bg-dark">Cookie Preferences</ListGroup.Item>
                </ListGroup>    
                </Col>
                <Col className="md-3">
                <ListGroup borderless >
                    <ListGroup.Item className="footer-list bg-dark">Gift Cards</ListGroup.Item>
                    <ListGroup.Item className="footer-list bg-dark">Terms of Use</ListGroup.Item>
                    <ListGroup.Item className="footer-list bg-dark">Corporate Information</ListGroup.Item>
                </ListGroup>    
                </Col>
                <Col className="col-12">
                <Button variant="outline-light">Service Code</Button>{' '}
                </Col>
                <Col className="col-12 font-color mt-1">
                © 1997-2021 Netflix Inc
                </Col>
             </Row>
            </Container>
        
    </footer>
}
