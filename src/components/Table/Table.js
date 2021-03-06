import React, { Fragment, useEffect, useMemo, useRef, useState } from "react"
import { useSelector } from "react-redux"
import './Table.css'
import TableSearch from "../TableSearch/TabeSearch"
import accessor from "../../constant/accessor"

const Table = () => {

	/**
	 * Get Data from Store in state
	 */
	const [state, setState ] = useState( useSelector(state => state.employee));
	const employees = [...state]
	const [parPage, setParPage ] = useState(10)
	const [sliceStart, setSliceStart] = useState(0)
	const [sliceEnd, setSliceEnd] = useState(parPage)
	const [list, setList] = useState(employees)
	const [page, setPage ] = useState(1)
	const [pair , setPair ] = useState(1)
	
	const range = []
	const countPage = Math.ceil( (list.length) / parPage )
	for (let i = 1; i <= countPage; i++) {
		range.push(i);
	}


	/**
	 * <tBody> Show list of employee per page 
	 * @param { Array.object} list - list of employees
	 * @param { number } - sliceStart - start of slice
	 * @param { number } - sliceEnd - end of slice
	 */

	const TableBody = ({list, sliceStart, sliceEnd}) => {
		return(
			<tbody>
				{ list.length ? list.slice(sliceStart, sliceEnd).map( (elmt, key) =>{
						return(
							<tr className="trBody" key={key}>
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
					} )  : "DatanotFount" 
				}
			</tbody>
		)
	}
	

	/**
	 * <thead> show the head of table from array
	 *  @param { Array.object} accessor - list of headind columns
	 */
	const TableHead = ({
		accessor
	}) => {
		/**
		 * <th> Show label of column
		 * @param {object} label column
		 */
		const Th = ({label}) =>{
			console.log(label)
			const handleSortBy= (accessor, pair) =>{
				const modulo = pair % 2
			const sorted = employees.sort((a,b)=>{ if(a[accessor].toString() < b[accessor].toString()) { return modulo ? -1 : 1; }
			if(a[accessor].toString() > b[accessor].toString()) { return modulo ? 1 : -1; }
			return 0;} )
			setList(sorted)
				}
 		return(
			<th scope="col" id={label.accessor} 
			onClick={ () => {
				setPair(pair + 1)
				handleSortBy(label.accessor, pair)
			}}
			className={"asc"}
		>{label.name}</th>
		 )
	}

		return(
			<thead>
				<tr> 
						{
						accessor.map( (label, key) => {
							return( 
							<Fragment key={key}>
								<Th label={label} />
							</Fragment>
								)
						} )}
		    </tr>
			</thead>
		)		
	}

	useEffect(() => {
	},[parPage, list, page, employees,sliceStart,sliceEnd])


	/**
	 * @param {number} value - number per page
	 */

	const handleParPage = (value) => {
		setParPage(value)
		if(value > employees.length){
			setSliceStart(0)
			setList(employees)
			setSliceEnd(employees.length)
		}
		else{
			setSliceEnd(value)
		}
		setPage(1)
	} 

	/**
	 * 
	 * @param {string} value - to research
	 */
	const handleSearch = (value) => {
		let resultat = []
		let prevRes = []
		state.find( (elmt, index) => {
			for( let [key, item] of Object.entries(elmt)){
				if(typeof item === "string" && item.toLocaleLowerCase().includes(value.toLocaleLowerCase())){
					prevRes.splice(resultat.length, 0, elmt)
				}
				resultat = [...new Set(prevRes)]
			}
		})
		setSliceStart(0)
		setSliceEnd(parPage)
		setList(resultat)
	}


/**
 * 
 * @param {number} elmt - number page
 */
	const handlePagination= (elmt) =>{
		if( elmt === 1 ){
			 setSliceStart(0); 
			 setSliceEnd(parPage)
			} else { 
				setSliceStart((parPage *( elmt - 1)))
				if( parPage*elmt > employees.length){
					setSliceEnd(employees.length)
				} else { 
					setSliceEnd( parPage*elmt)
				}
			}
		setPage(elmt)
	}
	
	return( 
				<div className="main">
					<div className="header-table"> 
						<label>Show 
							<select name="employee-table_length" aria-controls="employee-table" 
							onChange={ (e) =>{ 
								handleParPage(e.target.value);
							} }
							>
								{ [10,25,50,100].map( (elmt, key) => {
									return( <option value={elmt} key={key} >{elmt}</option>)
								})}
							</select> 
						entries</label>
						<div id="employee-table_filter" className="dataTables_filter">
							<label>Search: 
								<TableSearch
									onChange={(value) => {
										setPage(1)
										handleSearch(value)
									}}
								/>
							</label>
						</div>
					</div>
					<table id="employee-table" className="display">
						<TableHead 
							accessor={accessor}
							list={list}
						/>
						<TableBody list={list} sliceEnd={sliceEnd} sliceStart={sliceStart} />
					</table>
						<div className="tfooter">
							<div>
								<p>Showing { page === 1 ? "1" : sliceStart+ 1} to {sliceEnd} of {page === 1 ? list.length : employees.length  } entries</p>
							</div>
							<div className="pagination">
								{
									range.length !== 1 ? range.map( (elmt, key) => { 
										return( 
											<button 
											onClick={() => {
												setPage(elmt);
												handlePagination(elmt, list)
											}}
											className={ page === elmt ? "paginationUnable" : "paginationDisable"}
											disabled={ page === elmt ? true : false } 
											key={key}>{elmt}</button>
											)
										}) : ""
								}
							</div>
						</div>
				</div>
		
			)
}

export default Table


