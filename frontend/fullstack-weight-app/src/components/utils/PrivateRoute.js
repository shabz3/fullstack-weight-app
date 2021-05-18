import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoginContext } from '../LoginContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const [authenticated, setAuthenticated] = useContext(LoginContext);
	return (
		<Route
			{...rest}
			render={(props) =>
				authenticated.authenticated === null ? null : authenticated.authenticated === true ? (
					<Component {...props} />
				) : (
					<Redirect to="/" />
				)
			}
		/>
	);
};
export default PrivateRoute;
