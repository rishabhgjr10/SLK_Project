const Document = require('../models/Document');

// Create a new document
exports.createDocument = async (req, res) => {
    const { name, content } = req.body;
    try {
        const newDoc = new Document({ name, content, createdBy: req.user.userId });
        await newDoc.save();
        res.status(201).json(newDoc);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

// Get all documents
exports.getDocuments = async (req, res) => {
    try {
        const documents = await Document.find().populate('createdBy', 'username');
        res.status(200).json(documents);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};