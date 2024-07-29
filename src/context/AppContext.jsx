/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react'
import {catalog } from '../data/catalog.js'
import {desserts as dataDesserts} from '../data/desserts.js'
import { dataCalendar } from '../data/dataCalendar.js'
import { densityPopulation as dpDataTable } from '../data/densityPopulation.js'


export const AppContext = React.createContext()
export default function AppContextProvider({children}) {
	const [calendarEvents, setCalendarEvents] = React.useState([]);
	const [catalogItems, setCatalogItems] = React.useState([]);
	const [desserts, setDesserts] = React.useState([]);
	const [densityPopulation, setDensityPopulation] = React.useState([])

	function createDessert(data) {
		const { name, calories, fat, carbs, protein, price } = data;
		setDesserts([
			...desserts,
			{
				name,
				calories,
				fat,
				carbs,
				protein,
				price,
				history: [
					{ date: "2020-01-05", customerId: "11091700", amount: 3 },
					{ date: "2020-01-02", customerId: "Anonymous", amount: 1 },
				],
			},
		]);
	}

	function addNewCalendarEvents(title,from,to,date){
		setCalendarEvents([...calendarEvents,{
			title,
			from,
			to,
			date
		}])

		console.log(calendarEvents)
	}

	function addRowDPDataTable(name,code,population,size) {
		setDensityPopulation([...densityPopulation,{
			name,
			code,
			population,
			size,
			density: () => this.population/this.size
		}])
	}

	React.useEffect(() => {
		setCatalogItems(catalog);
		setDesserts(dataDesserts);
		setCalendarEvents(dataCalendar);
		setDensityPopulation(dpDataTable);
	}, []);

	return (
		<AppContext.Provider
			value={{
				catalogItems,
				desserts,
				createDessert,
				addNewCalendarEvents,
				calendarEvents,
				densityPopulation,
				addRowDPDataTable,
			}}>
			{children}
		</AppContext.Provider>
	);

}

