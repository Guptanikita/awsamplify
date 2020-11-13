import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from '../graphql/mutations'

import awsExports from "../aws-exports";
import CaseDetail from './CaseDetail';
Amplify.configure(awsExports);

const initialState = { address: '', amazon_wishlist_url: '', description: '' };

function CaseModal() {
    const [show, setShow] = React.useState(false);
    const [formState, setFormState] = React.useState(initialState)
    const [todos, setTodos] = React.useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function addTodo() {
        try {
            setShow(false)
            if (!formState.amazon_wishlist_url || !formState.description) return
            const todo = { ...formState }
            setTodos([...todos, todo])
            setFormState(initialState)
            await API.graphql(graphqlOperation(createTodo, { input: todo }))
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow} style={{ float: "right" }} >
                Create Case
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: 'black' }}>Create Case</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ color: 'black' }}>
                    <CaseDetail />
                </Modal.Body>
                <Modal.Footer >
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default CaseModal;