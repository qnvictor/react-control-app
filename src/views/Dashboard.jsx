/* eslint-disable no-unused-vars */
import * as React from "react";
import ControlPanel from "../components/ControlPanel";
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
import { Stack } from "@mui/material";

function Dashboard() {
	const items = [
		{
			title: "Admin",
			text: "See information about Administration.",
			icon: <ManageAccountsIcon fontSize='small' />,
			href: "#",
		},
		{
			title: "POS",
			text: "Enter to Point of Sale (POS).",
			icon: <PointOfSaleIcon fontSize='small' />,
			href: "#",
		},
		{
			title: "Menu",
			text: "See information about menu.",
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
	return (
		<Paper sx={{ height: "100vh" }}>
			<Stack direction={"column"}>
				<div>Dashboard</div>

				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						m: "auto 0",
						p: 2,
					}}>
					<ControlPanel items={items} />
				</Box>
			</Stack>
		</Paper>
	);
}

export default Dashboard;
