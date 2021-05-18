import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SnoozeRoundedIcon from '@material-ui/icons/SnoozeRounded';
import { LoginContext } from './LoginContext';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
	},
	snoozeButton: {
		fontSize: 40,
	},
}));

export default function Navbar() {
	const classes = useStyles();

	const [authenticated, setAuthenticated] = useContext(LoginContext);

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					{/* <img src="https://unsplash.it/40/40" alt="" /> */}
					<IconButton edge="start" color="inherit" aria-label="menu">
						<SnoozeRoundedIcon className={classes.snoozeButton} />
					</IconButton>

					<Typography variant="h6" className={classes.title}>
						Weigh In
					</Typography>

					{authenticated.authenticated === null ? null : authenticated.authenticated === true ? (
						<div>
							<Button color="inherit">Add Weight</Button>
							<Button color="inherit">View Weight</Button>
							<Button color="inherit">Update Weight</Button>
							<a href="http://localhost:5002/auth/logout">Log Out</a>
						</div>
					) : (
						<a href="http://localhost:5002/auth/google">Log In</a>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}
