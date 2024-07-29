/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import  Box from "@mui/material/Box";
import CircleIcon from "@mui/icons-material/Circle";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { AppContext } from "../context/AppContext";
import { Stack, Typography } from "@mui/material";


export default function SelectedListItem({ target = "" }) {
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const { calendarEvents } = React.useContext(AppContext);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	const items = calendarEvents.filter((item) => item.date === target);

	return (
		<Box
			className=''
			sx={{
				width: "100%",
				height: 250,
				maxWidth: 360,
			}}>
			<Box
				className=''
				sx={{
					height: 10,
					m: "0 auto",
					px: 2,
				}}></Box>
			<List
				className={"bg-blue-500"}
				component='nav'
				aria-label='main mailbox folders'
				sx={{ overflowY: "auto", maxHeight: 300 }}>
				{items.map((element, index) => (
					<ListItemButton
						key={index}
						sx={{
							display: "flex",
							justifyContent: "flex-start",
							opacity: selectedIndex !== index ? 0.5 : 1,
						}}
						selected={selectedIndex === index}
						onClick={(event) => handleListItemClick(event, index)}>
						<ListItemIcon>
							{selectedIndex === index ? (
								<CircleIcon htmlColor='white' fontSize='sm' />
							) : null}
						</ListItemIcon>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								gap: 5,
							}}>
							<Stack direction={"column"}>
								<Typography fontSize={15} color={"white"}>
									{/* 12:30 PM */}
									{element.from}
								</Typography>
								<Typography fontSize={15} color={"white"}>
									{/* 02:00 PM */}
									{element.to}
								</Typography>
							</Stack>
							<Box
								className=' rounded-lg bg-blue-400'
								sx={{
									width: 180,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									color: "white",
									px: 1,
								}}>
								<ListItemText primary={element.title} />
							</Box>
						</Box>
					</ListItemButton>
				))}
				{items.length < 1 && (
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							mt: 2,
							color: "white",
						}}>
						<Typography
							className=' text-center w-56 p-2 rounded-lg bg-blue-400'
							color={"white"}>
							No Events
						</Typography>
					</Box>
				)}

		
			</List>
		</Box>
	);
}