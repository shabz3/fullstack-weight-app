import express from 'express';
import passport from 'passport';
import User from '../models/user.model';

const CLIENT_HOME_PAGE_URL = 'http://localhost:3000';

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));
router.get(
	'/google/callback',
	passport.authenticate('google', { successRedirect: CLIENT_HOME_PAGE_URL + '/weight/add', failureRedirect: '/' })
);


// logout user
router.get('/logout', (req, res) => {
	req.logout();
	res.redirect(CLIENT_HOME_PAGE_URL);
});


export default router;
