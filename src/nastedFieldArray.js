import React from 'react';
import { useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import { IoMdAdd } from 'react-icons/io';
import { MdOutlineDelete } from 'react-icons/md';

export default function NestedArray ({ nestIndex, control, register }){
	const [count, setCount] = useState(1)
	const { fields, remove, append } = useFieldArray({
		control,
		name: `test[${nestIndex}].nestedArray`,
	});

	return (
		<div className='mt-5'>
			<button className='btn btn-info text-white ms-auto d-block mb-3' type="button" onClick={() => append({ })}>
				Add table <IoMdAdd/>
			</button>
		<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
						<th scope="col">Handle</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
				{fields.map((item, k) => {
					return (
							<tr key={item.id}>
								<th scope="row"></th>
								<td className='p-0'>
									<input className='form-control rounded-0' {...register(`test[${nestIndex}].nestedArray[${k}].table1`, { required: true })}/>
								</td>
								<td className='p-0'>
									<input className='form-control rounded-0' {...register(`test[${nestIndex}].nestedArray[${k}].table2`, { required: true })}/>
								</td>
								<td className='p-0'>
									<input className='form-control rounded-0' {...register(`test[${nestIndex}].nestedArray[${k}].table3`, { required: true })}/>
								</td>
								<td className='p-0'>
									<input className='form-control rounded-0' {...register(`test[${nestIndex}].nestedArray[${k}].table4`, { required: true })}/>
								</td>
								<td className='p-0'>
									{fields.length > 1 ? <button className='btn btn-danger m-auto d-block px-2 py-1' type="button" onClick={() => remove(k)}> <MdOutlineDelete size={"20px"}/> </button> : ""}
								</td>
							</tr>
					);
				})}
				</tbody>
			</table>
		</div>
	);
};
