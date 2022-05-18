
/**
 * @param {string} name - name of select  
 * @param {array} array - array of option 
 * @param {object} onChange - onChange event inherit
 */
const FormSelect = ({name, array, onChange}) => {
	return(
		<>
		<select name={name} id={name} onChange={(e) => onChange(e.target.value, e.target.name)}>
      { 
				array.map( (elmt, key) => {
					if(typeof elmt === 'object'){elmt = elmt.name}
					return( 
						<option value={elmt} key={key}> {elmt} </option>
					)
				})
			}
    </select>
		<label htmlFor={name}>{name}</label>
		</>
	)
}

export default FormSelect;