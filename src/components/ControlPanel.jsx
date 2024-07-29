/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react'
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import InventoryIcon from "@mui/icons-material/Inventory";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));
function ResponsiveGrid({ items = [] }) {
	const [selected,setSelected]= React.useState("")
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}>
				{items.map((item, index) => (
					<Grid item xs={2} sm={4} md={4} key={index}>
						{/* <Item>xs=2</Item> */}
						<a
							id=''
							onClick={() => (selected !== item.title) ? setSelected(item.title): setSelected("")}
							href={item.href || "#"}
							className={`group block max-w-xs mx-auto rounded-lg p-6  ring-1  shadow-lg space-y-3   hover:ring-sky-500 ${
								selected === item.title
									? "bg-sky-500 ring-sky-500"
									: "bg-white ring-slate-900/5"
							}`}>
							<div className='flex items-center space-x-3'>
								{/* <svg
									className='h-6 w-6 stroke-sky-500 group-hover:stroke-white'
									fill='none'
									viewBox='0 0 24 24'></svg> */}
								<Typography
									className={` font-semibold  ${
										selected === item.title
											? "text-white font-bold "
											: "text-slate-500 text-sm "
									}`}>
									{item.icon}
								</Typography>
								<h3
									className={` font-semibold  ${
										selected === item.title
											? "text-white font-bold text-xl"
											: "text-slate-500 text-sm "
									}`}>
									{item.title}
								</h3>
							</div>
							<p
								className={` text-sm truncate ${
									selected === item.title ? "text-white " : "text-slate-400"
								}`}>
								{item.text}
							</p>
						</a>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

export default function ControlPanel({items=[]}){

	return (
		<React.Fragment >
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					m: "auto 0",
					p: 2,
				}}>
				<ResponsiveGrid items={items} />
			</Box>
		</React.Fragment>
	);
}