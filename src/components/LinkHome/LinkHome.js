import { Link } from "react-router-dom";
import './LinkHome.css'

const LinkHome = () => {
	return( 
		<div className="divLink">
			<Link className="linkHome" to="/">Home</Link>
		</div>
	)
}

export default LinkHome;