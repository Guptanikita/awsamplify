/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from '../graphql/mutations'
import { listTodos } from '../graphql/queries'
import awsExports from "../aws-exports";
import { Button, Modal, Form } from 'react-bootstrap';
Amplify.configure(awsExports);

const initialState = { address: '', description: '', amazon_wishlist_url: '' };

const CaseDetail = () => {
    const [formState, setFormState] = useState(initialState)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetchTodos()
    }, [])

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
    }

    async function fetchTodos() {
        try {
            const todoData = await API.graphql(graphqlOperation(listTodos))
            const todos = todoData.data.listTodos.items
            setTodos(todos)
        } catch (err) { console.log('error fetching todos') }
    }

    async function addTodo() {
        try {
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
        <div>
            <Form.Group controlId="CaseDescription">
                <Form.Label style={{ color: 'black' }}>Case Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" onChange={event => setInput('description', event.target.value)} />
                <Form.Text className="text-muted">
                    Add person name in Description.
                            </Form.Text>
            </Form.Group>
            <Form.Group controlId="CaseAddress">
                <Form.Label style={{ color: 'black' }}>Delivery address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" onChange={event => setInput('address', event.target.value)} />
            </Form.Group>
            <Form.Group controlId="CaseWishlistUrl">
                <Form.Label style={{ color: 'black' }}>Amazon WishList</Form.Label>
                <Form.Control type="text" placeholder="Wishlist url" onChange={event => setInput('amazon_wishlist_url', event.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={addTodo}>Create</Button>
        </div>
    )
}

const styles = {
    container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20, color: "black" },
    todo: { marginBottom: 15, color: "black" },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18, color: "black" },
    todoName: { fontSize: 20, fontWeight: 'bold', color: "black" },
    todoDescription: { marginBottom: 0, color: "black" },
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px', color: "black" }
}

export default CaseDetail;