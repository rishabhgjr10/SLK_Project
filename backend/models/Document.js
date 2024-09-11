const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    content: { type: String, default: '' },
    lastModified: { type: Date, default: Date.now },
    status: { type: String, enum: ['Draft', 'Reviewed', 'Approved'], default: 'Draft' },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Document', DocumentSchema);