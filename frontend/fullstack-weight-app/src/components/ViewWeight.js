import React, { useContext, useEffect, useState } from 'react';
import {LoginContext} from "./LoginContext"

const ViewWeight = () => {
	const [authenticated, setAuthenticated] = useContext(LoginContext);
	const [weight, setWeight] = useState();

	useEffect(() => {
		fetch("http://localhost:5002/weight")
		.then(res => res.json())
		.then(returnData => returnData ? setWeight(returnData[0].weight) : null)
	}, []);

	return (
		<div>
			<p>{weight ? weight : "No weight to show"}</p>
		</div>
	);
};
export default ViewWeight;
