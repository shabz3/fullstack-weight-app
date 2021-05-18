import express from 'express';

const router = express.Router();

// check if user is authenticated
router.get('/', async (req, res) => {
	res.status(200).json({
		authenticated: true,
		message: "User successfully authenticated",
		user: req.user,
		cookies: req.cookies
	})
});

export default router;