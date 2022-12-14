import React from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import DynamicNavbar from '../DynamicNavbar';

const QuerySearch = () => {
    const [searchParam, setSearchParams] = useSearchParams()
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({ name: name, age: age })
        e.target.reset();
    }

    return (
        <div>
            <DynamicNavbar />
            <div style={{ textAlign: 'center' }}>
                <h1>Query Search as User</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                        required
                    /> <br />
                    <input
                        type="text"
                        placeholder='Age'
                        onChange={(e) => setAge(e.target.value)}
                    /> <br />
                    <button type='submit'>Search User</button>
                </form>
            </div>
        </div>
    );
};

export default QuerySearch;