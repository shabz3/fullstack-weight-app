import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import passport from 'passport';
import passportFunction from './config/passport.js';
import session from 'express-session';
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser';

import weightRouter from './routes/weight.js';
import authRouter from './routes/auth.js';
import authCheckRouter from './routes/authCheck.js';

const port = process.env.PORT || 5002;

const app = express();
dotenv.config({ path: './config/.env' });

passportFunction(passport);

const uri = process.env.ATLAS_URI;
mongoose.connect(
	uri,
	{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false },
	() => {
		console.log('Mongodb connection established successfully');
	}
);

app.use(
	cookieSession({
		name: 'session',
		keys: [process.env.COOKIE_KEY],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: 'http://localhost:3000',
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		credentials: true,
	})
);

app.use('/auth', authRouter);

const auth = (req, res, next) => {
	if (!req.user) {
		res.status(401).json({
			authenticated: false,
			message: 'User has not been authenticated',
		});
	} else {
		next();
	}
};
app.use(express.json());
app.use('/authcheck', auth, authCheckRouter);
app.use('/weight', weightRouter);


app.use(
	session({
		secret: 'hello',
		saveUninitialized: false,
		resave: true,
	})
);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
