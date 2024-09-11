const express = require('express');
const { auth } = require('../middleware/authMiddleware');
const { createDocument, getDocuments } = require('../controllers/documentController');
const router = express.Router();

router.post('/create', auth, createDocument);
router.get('/', auth, getDocuments);

module.exports = router;