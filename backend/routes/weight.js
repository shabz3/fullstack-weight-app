import express from 'express';
import User from '../models/user.model.js';
import Weight from '../models/weight.model.js';

const router = express.Router();

// get all exercises
router.get('/', async (req, res) => {
	try {
		const weights = await Weight.find();
		res.status(200).json(weights);
	} catch (error) {
		res.json({ message: error });
	}
});

router.post('/add', async (req, res) => {
	const weight = req.body.weight;
	const date = Date.parse(req.body.date);

	const newWeight = new Weight({ weight, date });

	const savedWeight = await newWeight.save();

	try {
		res.status(200).json(savedWeight);
	} catch (error) {
		res.status(409).json({ message: error });
	}
});

// check if user is authenticated
router.get('/authcheck', async (req, res) => {
	res.status(200).json({
		authenticated: true,
		message: "User successfully authenticated",
		user: req.user,
		cookies: req.cookies
	})
});

export default router;
