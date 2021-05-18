import React, { useState, useEffect, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { DatePicker } from '@material-ui/pickers';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AddWeight = () => {
	const [value, setValue] = useState();
	const [weight, setWeight] = useState();
	const [date, setDate] = useState(null);
	const isInitialMount = useRef(true);
	const { id } = useParams();

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else {
			if (weight !== null && Number.isFinite(weight)) {
				axios.post('http://localhost:5002/weight/add', { weight, date }).then((res) => console.log(res.data));
			}
		}
	}, [weight]);

	const handleChange = (e) => {
		const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
		setValue(onlyNumbers);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setWeight(value);

		// window.location = '/';
	};

	const onChange = (e) => {
		setDate(e);
	};

	return (
		<div>
			<h1>Add Weight</h1>
			<form onSubmit={handleSubmit}>
				<TextField
					type="number"
					id="outlined-basic"
					label="Current Weight (Kg)"
					variant="outlined"
					onChange={handleChange}
				/>

				<DatePicker
					autoOk
					variant="inline"
					label="Basic example"
					value={date}
					disableFuture
					onChange={onChange}
				/>

				<Button type="submit">Submit Weight</Button>
			</form>
		</div>
	);
};
export default AddWeight;
