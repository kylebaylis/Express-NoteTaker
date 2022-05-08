const router = require('express').Router();

const { /* functions will go here */} = require('../../lib/notes');
const notes = require('../../Develop/db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

// router.post( /* notes */)

module.exports = router;