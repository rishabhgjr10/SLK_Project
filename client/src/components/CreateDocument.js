// src/components/CreateDocument.js

import React, { useState } from 'react';
import { createDocument } from '../services/api';

const CreateDocument = ({ token }) => {
    const [formData, setFormData] = useState({ name: '', content: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createDocument(formData, token);
            setMessage('Document created successfully.');
        } catch (error) {
            setMessage('Error creating document.');
        }
    };

    return (
        <div>
            <h2>Create Document</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Document Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="content"
                    placeholder="Document Content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Create Document</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateDocument;
