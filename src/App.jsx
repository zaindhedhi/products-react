import React, { useEffect, useState } from 'react'
import Btn from './components/Btn';

const App = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
            const response = await data.json()
            console.log(response);
            setUsers(response)
        } catch (error) {
            console.log(error)
            setError(true)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <h1>Quiz App</h1>
            {/* {loading ? <h1>Loading...</h1> : null} */}
            {loading && <h1>Loading...</h1>}
            {users && users.map((item, index) => {
                return <Btn title={item.name }/>
            })}
            {error && <h1>Nahi dikha rha bhai ma...</h1>}
        </>
    )
}

export default App



// javascript ka undar kon kon si valu