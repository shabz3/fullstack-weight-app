import React, { useState, createContext, useEffect } from 'react';

export const LoginContext = createContext()

export const LoginProvider = props => {

	const [authenticated, setAuthenticated] = useState({ user: {}, error: null, authenticated: null });

    useEffect(() => {
		fetch('http://localhost:5002/authcheck', {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': true,
			},
		})
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				} else {
					throw new Error('Failed to authenticate user');
				}
			})
			.then((returnData) => {
				console.log(returnData);
				setAuthenticated({ authenticated: true, user: returnData.user });
			})
			.catch((error) => {
				setAuthenticated({ authenticated: false, error: 'Failed to authenticate user' });
			});
	}, []);

    return (
        <LoginContext.Provider value={[authenticated, setAuthenticated]}>
            {props.children}
        </LoginContext.Provider>
    )
}