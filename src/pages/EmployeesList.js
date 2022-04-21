import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import  Table  from "../components/Table/Table";

const EmployeesList = () =>{
	return(
		<div id="employee-div" className="container">
			<Header />
      <Table />
			<Link to="/">Home</Link>
		</div>
	)
}

export default EmployeesList;