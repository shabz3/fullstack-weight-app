import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import ViewWeight from './components/ViewWeight';
import AddWeight from './components/AddWeight';
import EditWeight from './components/EditWeight';

import PrivateRoute from "./components/utils/PrivateRoute"

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Route path="/" exact component={Homepage} />
				<PrivateRoute path="/weight" exact component={ViewWeight} />
				<PrivateRoute path="/weight/add" exact component={AddWeight} />
				<PrivateRoute path="/weight/edit" exact component={EditWeight} />
			</div>
		</Router>
	);
};
