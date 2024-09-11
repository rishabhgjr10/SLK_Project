// src/components/DocumentList.js

import React, { useState, useEffect } from 'react';
import { getDocuments } from '../services/api';

const DocumentList = ({ token }) => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await getDocuments(token);
                setDocuments(response.data);
            } catch (error) {
                console.log('Error fetching documents:', error);
            }
        };
        fetchDocuments();
    }, [token]);

    return (
        <div>
            <h2>Document List</h2>
            <ul>
                {documents.map((doc) => (
                    <li key={doc._id}>
                        <strong>{doc.name}</strong>: {doc.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DocumentList;
