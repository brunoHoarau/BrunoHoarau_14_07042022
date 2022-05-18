import { useState } from "react"

/**
 * @param {number} key - key of elmt in map
 * @param {string} type - type of input
 * @param {string} name - name of input
 * @param {Object} onChange - onChange evnt inherit
 * @param {string} labelName - label of input
 */

const FormInput = ({key, type, name, id, onChange,  labelName}) => {
	const [value, setValue] = useState('');
	return(
		<div className='form_split' key={key}>
    	<input 
				type={type} 
				id={id}
				name={name}
				value={value}
				onChange={ (e) => {
					setValue(e.target.value)
					onChange(e.target.value, e.target.name)
				}}
			/>
			<label htmlFor={id}>{labelName}</label>
		</div>
	)
}

export default FormInput;