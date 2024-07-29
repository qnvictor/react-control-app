/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import CatalogItems from '../components/CatalogItems'
import MyTabs from '../components/Tabs'
import DataTable from '../components/CollapsibleDataTable'
import Form from "../components/Form";
import Calendar from '../components/Calendar'
import { AppContext } from "../context/AppContext";
import { FormContext } from "../context/FormContext";



export function CatalogSection(){

}

export default function Catalog() {
	const { catalogItems, desserts } = React.useContext(AppContext);
	const {fields}= React.useContext(FormContext)
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
		<>
			<Box sx={{height:'100vh'}}>
				<Stack
				sx={{width:'100%', height:'100%'}}
					direction={{ xs: "column", sm: "row", md: "column" }}
					spacing={{ xs: 1, sm: 2 }}>
					<MyTabs
						items={[
							{ label: "Item 0", index: 0, content: <>Item 0</> },
							{
								label: "Form",
								index: 1,
								content: <Form titleForm={"Dessert Form"} fields={fields} />,
							},
							{ label: "Table", index: 2, content: renderDataTable },
							{ label: "Catalog", index: 3, content: renderCatalogItems },
							{ label: "Calendar", index: 4, content: <Calendar/> },
						]}
					/>
					{/* <CatalogItems/> */}
				</Stack>
			</Box>
		</>
	);
}

