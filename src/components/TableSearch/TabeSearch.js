import { useState } from "react";
import { useSelector } from "react-redux";


/**
 * @param {object} onChange event inherit 
 */

const TableSearch = ({onChange}) => {
	const [value,setValue] = useState('')
	let employees = useSelector( state => state.employee)
	let resultat = []

	// const research = (value) => {
	// 	resultat = []
	// 	// console.log(employees)
	// 	employees.find( (elmt, index) => {
	// 		for( let [key, item] of Object.entries(elmt)){
	// 			if(typeof item === "string" && item.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
	// 				resultat.splice(resultat.length, 0, elmt)
	// 			} 
	// 		}
	// 	})
	// 	console.log(resultat)
	// }

	return(
	<input type="search" 
	aria-controls="employee-table"
	value={value}
	onChange= { (e) => {
		setValue(e.target.value)
		onChange(e.target.value)
		// research(e.target.value)
	} }
		/>
 )
}

export default TableSearch;