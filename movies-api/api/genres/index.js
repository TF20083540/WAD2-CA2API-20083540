import express from 'express';
import Genres from './genreModel';
import uniqid from 'uniqid'

const router = express.Router(); 


// Get all users
router.get('/', async (req, res) => {
    const genres = await Genres.find();
    res.status(200).json(genres);
});


export default router;