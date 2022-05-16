import { createStore } from 'redux'
import { produce } from 'immer'

const initState = {
	employee: [
		{
			"department": "Sales",
			"firstName": "Helga",
			"lastName": "Norman",
			"street": "684 Seagate Avenue",
			"city": "Rehrersburg",
			"state": "Delaware",
			"zipCode": 5013,
			"birthDate": "2018-12-29",
			"startDate": "2021-04-18"
		},
		{
			"department": "Legal",
			"firstName": "Ora",
			"lastName": "Jordan",
			"street": "995 Ruby Street",
			"city": "Retsof",
			"state": "Illinois",
			"zipCode": 299,
			"birthDate": "2016-09-01",
			"startDate": "2019-02-25"
		},
		{
			"department": "Engineering",
			"firstName": "Goldie",
			"lastName": "Downs",
			"street": "391 Hancock Street",
			"city": "Steinhatchee",
			"state": "Connecticut",
			"zipCode": 7246,
			"birthDate": "2016-08-16",
			"startDate": "2019-09-04"
		},
		{
			"department": "Marketing",
			"firstName": "Galloway",
			"lastName": "Crane",
			"street": "932 Elizabeth Place",
			"city": "Hiko",
			"state": "Arizona",
			"zipCode": 6519,
			"birthDate": "2014-10-04",
			"startDate": "2014-01-08"
		},
		{
			"department": "Legal",
			"firstName": "Mclean",
			"lastName": "Conway",
			"street": "686 Amboy Street",
			"city": "Bison",
			"state": "New Mexico",
			"zipCode": 704,
			"birthDate": "2021-02-17",
			"startDate": "2021-12-15"
		},
		{
			"department": "Sales",
			"firstName": "Odessa",
			"lastName": "Dotson",
			"street": "777 Harman Street",
			"city": "Brookfield",
			"state": "Federated States Of Micronesia",
			"zipCode": 8640,
			"birthDate": "2018-07-21",
			"startDate": "2014-07-06"
		},
		{
			"department": "Marketing",
			"firstName": "Carly",
			"lastName": "Fry",
			"street": "302 Dumont Avenue",
			"city": "Delco",
			"state": "North Carolina",
			"zipCode": 8579,
			"birthDate": "2017-09-22",
			"startDate": "2016-01-06"
		},
		{
			"department": "Sales",
			"firstName": "Paulette",
			"lastName": "Burke",
			"street": "642 Nelson Street",
			"city": "Rew",
			"state": "Wyoming",
			"zipCode": 9358,
			"birthDate": "2015-09-16",
			"startDate": "2015-09-10"
		},
		{
			"department": "Sales",
			"firstName": "Marina",
			"lastName": "Mayer",
			"street": "658 Crescent Street",
			"city": "Fingerville",
			"state": "Alabama",
			"zipCode": 4287,
			"birthDate": "2017-07-03",
			"startDate": "2022-01-13"
		},
		{
			"department": "Marketing",
			"firstName": "Petra",
			"lastName": "Hampton",
			"street": "618 Strong Place",
			"city": "Darlington",
			"state": "Oregon",
			"zipCode": 9000,
			"birthDate": "2021-05-02",
			"startDate": "2021-10-06"
		},{
			"department": "Legal",
			"firstName": "Stein",
			"lastName": "Lewis",
			"street": "887 Furman Avenue",
			"city": "Tuttle",
			"state": "Maine",
			"zipCode": 8419,
			"birthDate": "2015-10-29",
			"startDate": "2019-01-17"
		},
		{
			"department": "Engineering",
			"firstName": "Vickie",
			"lastName": "Francis",
			"street": "441 Malbone Street",
			"city": "Canby",
			"state": "Connecticut",
			"zipCode": 3362,
			"birthDate": "2020-07-31",
			"startDate": "2016-05-15"
		},
		{
			"department": "Marketing",
			"firstName": "Stacie",
			"lastName": "Melendez",
			"street": "192 Highlawn Avenue",
			"city": "Coventry",
			"state": "Alaska",
			"zipCode": 3704,
			"birthDate": "2021-01-25",
			"startDate": "2018-07-18"
		},
		{
			"department": "Marketing",
			"firstName": "Katina",
			"lastName": "Gaines",
			"street": "727 Prince Street",
			"city": "Aguila",
			"state": "South Carolina",
			"zipCode": 9890,
			"birthDate": "2020-01-15",
			"startDate": "2022-04-10"
		},
		{
			"department": "Legal",
			"firstName": "Mercer",
			"lastName": "Duncan",
			"street": "250 Florence Avenue",
			"city": "Wacissa",
			"state": "Utah",
			"zipCode": 9286,
			"birthDate": "2020-01-20",
			"startDate": "2018-03-02"
		},
		{
			"department": "Sales",
			"firstName": "Haney",
			"lastName": "Chaney",
			"street": "217 Broadway ",
			"city": "Balm",
			"state": "Puerto Rico",
			"zipCode": 4125,
			"birthDate": "2014-03-25",
			"startDate": "2020-05-17"
		},
		{
			"department": "Sales",
			"firstName": "Tamara",
			"lastName": "Albert",
			"street": "872 Vandervoort Place",
			"city": "Lynn",
			"state": "American Samoa",
			"zipCode": 1786,
			"birthDate": "2019-04-06",
			"startDate": "2014-08-18"
		},
		{
			"department": "Engineering",
			"firstName": "Lina",
			"lastName": "Hicks",
			"street": "368 Hendrickson Place",
			"city": "Caledonia",
			"state": "Guam",
			"zipCode": 7391,
			"birthDate": "2014-07-28",
			"startDate": "2015-10-29"
		},
		{
			"department": "Marketing",
			"firstName": "Nancy",
			"lastName": "Dale",
			"street": "801 Clay Street",
			"city": "Emison",
			"state": "Oregon",
			"zipCode": 3643,
			"birthDate": "2021-09-13",
			"startDate": "2017-11-28"
		},
		{
			"department": "Engineering",
			"firstName": "Noelle",
			"lastName": "Anderson",
			"street": "105 Fiske Place",
			"city": "Westerville",
			"state": "Idaho",
			"zipCode": 3479,
			"birthDate": "2020-10-06",
			"startDate": "2015-05-19"
		}
	],
	openModal: false
}

const reducer = (state = initState, action) => {
	if( action.type === "AddEmployee"){
		return produce(state, (draft) =>{ 
			draft.employee = [...draft.employee, action.payload];
			draft.openModal = !state.openModal
		})
	}
	if( action.type === "CloseModal"){
		return produce(state, (draft) =>{ 
			draft.openModal = !state.openModal
		})
	}
return state
}

export const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
