import { useSelector } from "react-redux"
import './Table.css'


const Table = () => {

	const employees = useSelector( state => state.employee)
	console.log(employees)
	const labelList = ["description", "Last Name", "Start Date", "Department", "Date of Birth", "Street", "City", "State", "Zip Code"]

	return( 
		<div className="main">
			<div className="header-table"> 
				<label>Show 
					<select name="employee-table_length" aria-controls="employee-table" >
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
						<option value="100">100</option>
					</select> 
				entries</label>
				<div id="employee-table_filter" className="dataTables_filter">
					<label>Search: 
						<input type="search" placeholder="" aria-controls="employee-table" />
					</label>
				</div>
			</div>
			<table id="employee-table" className="display">
				<thead>
    			<tr>
						{
							labelList.map( (label) => {
								return( <th scope="col" key={label}>{label}</th>)
							} )
						}
    			</tr>
				</thead>
				<tbody> 
					{ 
						employees.map( (elmt, key) =>{ console.log(elmt.firstName);
							return(
								<tr key={key}>
									<td>{elmt.firstName}</td>
									<td>{elmt.lastName}</td>
									<td>{elmt.startDate}</td>
									<td>{elmt.department}</td>
									<td>{elmt.birthDate}</td>
									<td>{elmt.street}</td>
									<td>{elmt.city}</td>
									<td>{elmt.state}</td>
									<td>{elmt.zipCode}</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
			<div>Showing</div>
		</div>
	)
}

export default Table