/* src/App.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listTodos } from '../graphql/queries'
import awsExports from "../aws-exports";
import { Table } from 'react-bootstrap';
Amplify.configure(awsExports);


const CaseTable = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const todoData = await API.graphql(graphqlOperation(listTodos))
            const todos = todoData.data.listTodos.items
            setTodos(todos)
        } catch (err) { console.log('error fetching todos') }
    }

    return (
        <Table striped bordered hover size="sm" style={{ padding: "50px" }}>
            <thead>
                <tr>
                    <th style={styles.todoName}>Address</th>
                    <th style={styles.todoDescription} >Description</th>
                    <th style={styles.todoDescription} >Amazon Wishlist URL</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((todo, index) => (
                        <tr key={todo.id ? todo.id : index} style={styles.todo}>
                            <td style={styles.todoName}>{todo.address}</td>
                            <td style={styles.todoDescription}>{todo.description}</td>
                            <td style={styles.todoName} ><a href={todo.amazon_wishlist_url} > Wishlist</a>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

const styles = {
    todoName: { fontSize: 20, fontWeight: 'bold', color: "black" },
    todoDescription: { marginBottom: 0, color: "black" },
}

export default CaseTable;