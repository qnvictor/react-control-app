/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import MyCard from './Card'
import lizard from "../assets/reptile.jpeg";
import CatalogItems from '../components/CatalogItems'
import MyTabs from './Tabs'
import Catalog from '../views/Catalog'
import { AppContext } from "../context/AppContext";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(0),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export  function ResponsiveGrid({
	items = [{}],
}) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid
              
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
                alignContent={'center'}>
            
				{items.map((item, index) => (
					<Grid item xs={2} sm={4} md={4} key={index}>
						<Item>
							<Box
								sx={{ display: "flex", ml: "auto", justifyContent: "center" }}>
								<MyCard
									title={item.title}
									description={item.description}
									image={item.image}
								/>
								
							</Box>
						</Item>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
export default function Content({children}){
	const { catalogItems } = React.useContext(AppContext);

    return (
			<Box sx={{width:"100%" }}>
				{/* <ResponsiveGrid
					items={[
						{
							title: "Lizard",
							description:
								"Lizards are a widespread group of squamate reptiles...",
							image: lizard,
						},
						{
							title: "Lizard",
							description:
								"Lizards are a widespread group of squamate reptiles...",
							image: lizard,
						},
						{
							title: "Lizard",
							description:
								"Lizards are a widespread group of squamate reptiles...",
							image: lizard,
						},
						{
							title: "Lizard",
							description:
								"Lizards are a widespread group of squamate reptiles...",
							image: lizard,
						},
					]}
				/> */}
				{/* <CatalogItems /> */}
				<Catalog/>
			</Box>
		);
    
}