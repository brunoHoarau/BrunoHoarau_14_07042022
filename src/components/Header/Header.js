import './Header.css'
import { Link } from "react-router-dom"

const Header = () => {

	const location = window.location;
	return(
		location.pathname === "/" ?
			<header className="title">
        <h1>HRnet</h1>
				<Link to="/employee-list" > View Current Employees</Link>
        <h2>Create Employee</h2>
      </header>
			:
			<header>
				<h1>Current Employees</h1>
			</header>
	)
}

export default Header;