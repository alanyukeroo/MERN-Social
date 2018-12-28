const express = require('express');
const router = express.Router();


// Route
router.get('/test', (req, res) => res.json({msg : "Profiles Work!"}));

module.exports = router;