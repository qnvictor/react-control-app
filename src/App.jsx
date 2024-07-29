/* eslint-disable no-unused-vars */

//* React-Hooks
import * as React from 'react'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
//* Context
import FormContextProvider from './context/FormContext';
import { AppContext } from "./context/AppContext";
import { FormContext } from "./context/FormContext";
import ModelContextProvider from './context/ModelContext';
//* views
import Layout from "./views/Layout";
import Home from './views/Home';
import Store from './views/Store'
import Restaurant from './views/Restaurant';
import Dashboard from './views/Dashboard'
import PointSalesSystem from './views/PointSalesSystem'
import Menu from './views/Menu'
import Tables from './views/Tables'
import Users from './views/Users'
import Inventory from './views/Inventory'
import Settings from './views/Settings'
import Help from './views/Help'
import Catalog from "./views/Catalog";

import NoPage from "./views/NoPage";
//* Components
import Content from './components/Content';
import CatalogItems from "./components/CatalogItems";
import MyTabs from "./components/Tabs";
import DataTable from "./components/CollapsibleDataTable";
import Form from "./components/Form";
import Calendar from "./components/Calendar";
//* MUI
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
//* Icons
import HomeIcon from "@mui/icons-material/Home";
//* Style
// import './App.css'
import { styled } from "@mui/material/styles";

function App() {
	const { catalogItems, desserts } = React.useContext(AppContext);
	const { fields } = React.useContext(FormContext);
	const renderDataTable = (
		<DataTable
			mainCol='Dessert (100g serving)'
			headers={["Calories", "Fat(g)", "Carbs(g)", "Protein(g)", "Price($)"]}
			data={desserts}
			historyHeaders={["Date", "Customer", "Amount", "Total price($)"]}
			rowDataKeys={["name", "calories", "flat", "carbs", "protein", "price"]}
		/>
	);
	const renderCatalogItems = (
		<CatalogItems header={"Section"} items={catalogItems} />
	);
  return (
		<ModelContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='restaurant' element={<Restaurant />} />
						<Route path='dashboard' element={<Dashboard />} />
						<Route path='pos' element={<PointSalesSystem />} />
						<Route path='menu' element={<Menu />} />
						<Route path='tables' element={<Tables />} />
						<Route path='users' element={<Users />} />
						<Route path='inventory' element={<Inventory />} />
						<Route path='settings' element={<Settings />} />
						<Route path='help' element={<Help />} />
						<Route path='*' element={<NoPage />} />
					</Route>
				</Routes>
				{/* <Layout /> */}
			</BrowserRouter>
		</ModelContextProvider>
	);
}

export default App
