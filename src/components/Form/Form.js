import { useDispatch } from 'react-redux';
import './Form.css'
import {Add_Employee} from '../../actions/Actions';

const Form = () => {
	
	let localState = {
		firstName: null,
		lastName: null,
		birthDate: null,
		startDate: null,
		street: null,
		city: null,
		state: null,
		zipCode: null,
		department: null
	}

	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault();
		const copyState = {...localState, [e.target.name]: e.target.value};
		localState = copyState;
		}
	
	const handleFomr = (e) => {
		const form = e.target
		e.preventDefault()
		dispatch( Add_Employee( localState))
		form.reset()
	}

	const personData = [
		{ 
			labelName: "First Name",
			name: 'firstName',
			type: "text"
		},{
			labelName: "last Name",
			name: 'lastName',
			type: "text"
		},{
			labelName: "Date of Birth",
			name: 'birthDate',
			type: "date"
		},{
			labelName: "Start Date",
			name: 'startDate',
			type: "date"
		}
	];

	const departmentSelect = [
		"Please choose an option ","Sales", "Marketing", "Engineering", "Human Resources", "Legal"
	]

	return(
		<>
		<form id="formRh" onSubmit={(e) => { handleFomr(e)}} >
			<div className='cut'>
				{
					personData.map( elmt => {
						return (
							<div className='form_split' key={elmt.name}>
      					<input type={elmt.type} id={elmt.name}
								name={elmt.name}
								required
								onChange={(e) => { handleSubmit(e) } }
								/>
								<label htmlFor="first-name">{elmt.labelName}</label>
							</div>
						)
					})
				}
			</div>

			<div className='cut'>
        <fieldset className="address">
          <legend>Address</legend>
					<div className='form_split'>
          	<input id="street" type="text" />
          	<label htmlFor="street">Street</label>
					</div>
					<div className='form_split'>
          	<input id="city" type="text" />
          	<label htmlFor="city">City</label>
					</div>
					<div className='form_split'>
          	<select name="state" id="state"></select>
          	<label htmlFor="state">State</label>
					</div>
					<div className='form_split'>
          	<input id="zip-code" type="number" />
          	<label htmlFor="zip-code">Zip Code</label>
					</div>
        </fieldset>
				<div className='form_split'>
    			<select name="department" id="department" onChange={(e) => { handleSubmit(e) }}>
    			    { 
								departmentSelect.map( (elmt, key) => {
									return( 
										<option value={elmt} key={key}> {elmt} </option>
										)
									})
								}
    			</select>
					<label htmlFor="department">Department</label>
				</div>
			</div>
		</form>
	</>
	)
}

export default Form;