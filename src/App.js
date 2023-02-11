import React from 'react';
import { useForm } from 'react-hook-form';
import FieldArray from './fieldArray';
import './style.css';

const defaultValues = {
	test: [
		{
			id:"",
			data:"",
			number:"",
			select1:"",
			pinfl: '',
			fio:"",
			select2:"",
			select3:"",
			select4:"",
			select5:"",
			select6:"",
			text01:"",
			text02:"",
			text03:"",
			nestedArray: [{ table1: '', table2: '', table3: '', table4: '' }],
		},
	],
};

function App() {
	const { control, register, handleSubmit, getValues, errors, setValue, } = useForm({
		defaultValues,
	});
	const onSubmit = (data) => console.log('data', data);

	return (
		<form className='container my-5' onSubmit={handleSubmit(onSubmit)}>
			<h1>Address</h1>
			<FieldArray	{...{ control, register, defaultValues, getValues, setValue, errors }}	/>
			<button className='btn btn-success p-2 px-4' type='submit'>Send</button>
		</form>
	);
}

export default App;
