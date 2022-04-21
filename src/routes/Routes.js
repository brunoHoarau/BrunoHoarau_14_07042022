import Home from "../pages/Home"
import EmployeesList from "../pages/EmployeesList"
import { Routes, Route, Navigate } from "react-router-dom"

const routesApp = [
	{
		path: "/",
		page: <Home />
	},{
		path: "/employee-list",
		page: <EmployeesList/>
	},{
		path: "*",
		page: <Navigate replace to="/" />
	}
]

const Router = () => {
	return(
		<Routes >
			{
				routesApp.map( (elmt, key) =>{
					return(
						<Route path={elmt.path} element={elmt.page} key={key}/>
					)
				})
			}
		</Routes>
	)
	
}

export default Router;

