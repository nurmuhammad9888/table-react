import React from 'react';
import { useFieldArray } from 'react-hook-form';
import NestedArray from './nastedFieldArray'
import { MdOutlineDelete } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';

export default function FieldArray({ control, register, setValue, getValues }) {
	const { fields, remove } = useFieldArray({
		control,
		name: 'test',
	});

	return (
		<>
			<ul className='list-unstyled'>
				{fields.map((item, index) => {
					return (
						<li className='mt-5 border py-4 px-3 border-success border-opacity-50' key={item.id}>
							<div className='d-flex justify-content-between'>
								<input type="text" className='form-control form-input w-75' {...register(`test.${index}.id`, { required: true })} placeholder="ID"/>
								<input type="date" className='form-control form-input w-75 mx-2' {...register(`test.${index}.data`, { required: true })} placeholder="Data" />
								<input type="number"className='form-control form-input' {...register(`test.${index}.number`, { required: true })} placeholder="Number" />
							</div>
							<div className='d-flex justify-content-between mt-4'>
								<select className='form-select form-input w-75' {...register(`test.${index}.select1`, { required: true })}>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</select>
								<input type="text" className='form-control form-input mx-2 w-75' {...register(`test.${index}.pinfl`, { required: true })} placeholder="PINFL" />
								<input type="text"className='form-control form-input' {...register(`test.${index}.fio`, { required: true })} placeholder="FIO" />
							</div>

							<h4 className='text-primary mt-5'>Tables list</h4>
							<div className='d-flex'>
								<div className='d-flex gap-2 w-50'>
									<div className='w-100'>
										<select className='form-select form-input' {...register(`test.${index}.select2`, { required: true })}>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</select>
										<select className='form-select form-input mt-2' {...register(`test.${index}.select3`, { required: true })}>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</select>
									</div>
									<div className='w-100'>
										<input type="text" className='form-control form-input' {...register(`test.${index}.text01`, { required: true })} placeholder="text" />
										<input type="numbir"className='form-control form-input mt-2' {...register(`test.${index}.text02`, { required: true })} placeholder="text" />
									</div>
								</div>
								<div className='d-flex ms-3 w-50 gap-2'>
									<div className='w-100'>
										<select className='form-select form-input' {...register(`test.${index}.select4`, { required: true })}>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</select>
										<select className='form-select form-input mt-2' {...register(`test.${index}.select5`, { required: true })}>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</select>
									</div>
									<div className='w-100'>
										<select className='form-select form-input' {...register(`test.${index}.select6`, { required: true })}>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
										</select>
										<input type="text" className='form-control form-input mt-2' {...register(`test.${index}.text03`, { required: true })} placeholder="text" />
										<input type="text"className='form-control form-input mt-2' {...register(`test.${index}.text04`, { required: true })} placeholder="text" />
									</div>
								</div>
							</div>
							<NestedArray nestIndex={index} {...{ control, register }} />
							{fields.length > 1 ? <button className='btn btn-danger py-2' type="button" onClick={() => remove(index)}> <MdOutlineDelete size={"25px"}/> </button> : ""}
						</li>
					);
				})}
				<li>
					<button className='btn btn-info text-white mt-5 d-block ms-auto' type="button" onClick={() => {
							setValue('test', [
								...getValues().test,
								{
									pinfl: '',
									nestedArray: [{}],
								},
							]);
						}}>
						Add list <IoMdAdd/>
					</button>
				</li>
			</ul>
		</>
	);
}
