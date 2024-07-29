/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AppContext } from "../context/AppContext";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography component={'div'}>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

export default function VerticalTabs({items = [], orientation="horizontal"}){
	const {desserts} = React.useContext(AppContext)
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const renderTab = items.map((item, index) => (
		<Tab key={index} label={item.label} {...a11yProps(item.index)} />
	));

	const renderTabPanel = items.map((item, index) => (
		<TabPanel key={index}  value={value} index={item.index}>
			{item.content}
		</TabPanel>
	));

	return (
		<Box
			sx={{
				height:"100vh",
				flexGrow: 1,
				bgcolor: "background.paper",
				display: "flex",
				flexDirection: orientation === "vertical" ? "row":'column',
			}}>
			<Tabs
				orientation={orientation}
				variant='scrollable'
				value={value}
				onChange={handleChange}
				aria-label='Vertical tabs example'
				sx={{ borderRight: 1, borderColor: "divider" }}>
				{renderTab}
			</Tabs>
			{renderTabPanel}
		</Box>
	);
}

