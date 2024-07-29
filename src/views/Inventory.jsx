/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Button from "@mui/material/Button";
import ControlPanel from "../components/ControlPanel";
import Breadcrumbs from "../components/Breadcrumbs";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import InventoryIcon from "@mui/icons-material/Inventory";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import  Stack  from "@mui/material/Stack";

import StickyTable from "../components/StickyDataTable";


import { AppContext } from "../context/AppContext";

function createDensityPopulationData(name, code, population, size) {

	const density = population / size;
	return { name, code, population, size, density };
}

export default function Inventory() {
	const items = [
		{
			title: "Stock",
			text: "See Inventory stock.",
			icon: <ManageAccountsIcon fontSize='small' />,
			href: "#",
		},
		{
			title: "Entrances",
			text: "See table data of entrances.",
			icon: <PointOfSaleIcon fontSize='small' />,
			href: "#",
		},
		{
			title: "Departures",
			text: "See table data of departures.",
			icon: <FastfoodIcon fontSize='small' />,
			href: "#",
		},
		{
			title: "Inventary",
			text: "See information about inventary.",
			icon: <InventoryIcon fontSize='small' />,
			href: "#",
		},
		{
			title: "Products",
			text: "See information about products.",
			icon: <ViewInArIcon fontSize='small' />,
			href: "#",
		},
	];
	const { densityPopulation } = React.useContext(AppContext);
	const columns = [
		{ id: "name", label: "Name", width: 85 },
		{ id: "code", label: "Code", width: 30 },
		{
			id: "category",
			label: "Category",
			width: 50,
			align: "center",
			format: (value) => value.toLocaleString("en-US"),
		},
		{
			id: "size",
			label: "Size\u00a0(km\u00b2)",
			width: 85,
			align: "center",
			format: (value) => value.toLocaleString("en-US"),
		},
		{
			id: "density",
			label: "Density",
			width: 85,
			align: "center",
			format: (value) => value.toFixed(2),
		},
	];

	const dataRows = densityPopulation.map((row) =>
		createDensityPopulationData(row.name, row.code, row.population, row.size, row.density)
	);

	return (
		<>
			<Paper sx={{ height: "100vh" }}>
				<Stack direction={"column"} spacing={2} p={2}>
					<div>Inventary</div>

					<Breadcrumbs />
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							m: "auto 0",
							p: 2,
						}}>
						<ControlPanel items={items} />
					</Box>
					<Box sx={{}}>
						<Stack direction={"column"}>
							<Box sx={{}}>
								<Button>Add New</Button>
							</Box>
							<StickyTable data={dataRows} columns={columns} />
						</Stack>
					</Box>
				</Stack>
			</Paper>
		</>
	);
}


