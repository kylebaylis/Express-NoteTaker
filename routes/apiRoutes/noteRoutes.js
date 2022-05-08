const router = require('express').Router();
const { newNote } = require('../../lib/notes');
const notes = require('../../Develop/db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        res.json(results);
    }
    res.json(results);
});

router.post('/notes', (req, res) => {
    // will set id for note based on what next index of array is
    req.body.id = notes.length.toString();
    const note = newNote(req.body, notes);
    res.json(note);
});

module.exports = router;