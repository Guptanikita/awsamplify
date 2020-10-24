import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function CaseModal() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create Case
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: 'black' }}>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ color: 'black' }}>
                        <Form.Group controlId="CaseDescription">
                            <Form.Label style={{ color: 'black' }}>Case Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" />
                            <Form.Text className="text-muted">
                                Add persons name in Description.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="CaseDescription">
                            <Form.Label style={{ color: 'black' }}>Delivery address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" />
                        </Form.Group>
                        <Form.Group controlId="CaseDescription">
                            <Form.Label style={{ color: 'black' }}>Amazon WishList</Form.Label>
                            <Form.Control type="text" placeholder="Whishlist url" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer >
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                    </Button>
                        <Button variant="primary">Create</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default CaseModal;