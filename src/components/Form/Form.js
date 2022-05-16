import { useDispatch } from 'react-redux';
import './Form.css'
import FormInput from "../FormInput/FormInput";
import FormSelect from '../FormSelect/FormSelect';
import { Fragment, useState } from 'react';
import departmentSelect from '../../constant/DepartmentSelect'
import states from '../../constant/state'
import {Add_Employee} from '../../actions/Actions';
import personInfos from '../../constant/PersonInfos';

const Form = () => {
	const [state, setState] = useState(
		{
			firstName: "",
			lastName: "",
			birthDate: "",
			startDate: "",
			street: "",
			city: "",
			state: "",
			zipCode: "",
			department: ""
		}
	)

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(Add_Employee(state))
		e.target.reset()
	}
	
	const handleChange = (value, name) => {
		setState( (prevState)=> ({ ...prevState, [name]: value}))
	}
		
	return(
		<form id="formRh" onSubmit={(e) => { handleSubmit(e)}} >
			<div className='cut'>
				{
					personInfos.map( (elmt, key) => {
						return(
							<Fragment key={key}>
								<FormInput 
									type={elmt.type} 
									id={elmt.name}
									name={elmt.name}
									labelName={elmt.labelName}
									required
									onChange={(value, name) => {
										handleChange(value, name)
									}}
								/>
							</Fragment>
						)
					})
				}
			</div>
			<div className='cut'>
				<fieldset className="address">
      		  <legend>Address</legend>
							<FormInput 
								type="text"
								name="street"
								id="street"
								labelName="Street"
								onChange={(value, name) => { handleChange(value, name)}}
								/>
							<FormInput 
								type="text"
								name="city"
								id='city'
								labelName="City"
								onChange={(value, name) => { handleChange(value, name)}}
								/>
							<div className='form_split'>
								<FormSelect name="state" array={states} onChange={ (value,name) => { handleChange(value,name)}}/>
							</div>
							<FormInput 
								type="number"
								name="zipCode"
								id="zipCode"
								labelName="Zip Code"
								onChange={(value, name) => { handleChange(value, name)}}
								/>
      		</fieldset>
				</div>
				<div className='cut'>
				<div className='form_split'>
					<FormSelect name="department" array={departmentSelect} onChange={ (value,name) => { handleChange(value,name)}}/>
				</div>
			</div>
		</form>
	)
}
export default Form;