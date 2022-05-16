import Header from "../components/Header/Header";
import TableComponent  from "../components/Table/Table";
import LinkHome from "../components/LinkHome/LinkHome";


const EmployeesList = () =>{
	return(
		<div id="employee-div" className="container">
			<Header />
      <TableComponent />
			<LinkHome/>
		</div>
	)
}

export default EmployeesList;