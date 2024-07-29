/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button'
import ContrastIcon from "@mui/icons-material/Contrast";
import WbSunnyIcon from "@mui/icons-material/WbSunny";


import DialogForm from './DialogForm'

import { AppContext } from "../context/AppContext";

import SelectList from './SelectList'


function getDayOfWeek(num) {
	switch (num) {
		case 0:
			return "Domingo";
		case 1:
			return "Lunes";
		case 2:
			return "Martes";
		case 3:
			return "Miercoles";
		case 4:
			return "Jueves";
		case 5:
			return "Viernes";
		case 6:
			return "Sabado";
	}
}

function getMonthOfYear(num) {
	switch (num) {
		case 0:
			return "Enero";
		case 1:
			return "Febrero";
		case 2:
			return "Marzo";
		case 3:
			return "Abril";
		case 4:
			return "Junio";
		case 5:
			return "Junio";
		case 6:
			return "Julio";
		case 7:
			return "Agosto";
		case 8:
			return "Septiembre";
		case 9:
			return "Octubre";
		case 10:
			return "Noviembre";
		case 11:
			return "Diciembre";
	}
}



export default function DateCalendarValue() {
	const [value, setValue] = React.useState(dayjs("2022-04-17"));
	const [date,setDate] = React.useState("")
	const [dayNum,setDayNum] = React.useState(19)
	const [dayWeek,setDayWeek]=React.useState("Domingo")
	const [month, setMonth] = React.useState("July");
	const [year, setYear] = React.useState(2024);
	const [calendar,setCalendar]=React.useState([1,7,2024])



	const time = new Date()
	
	function handleOnChange(newValue){
		setValue(newValue);
		setDate(newValue["$d"].toISOString().slice(0, 10));
		setDayNum(newValue["$D"]);
		setDayWeek(getDayOfWeek(newValue["$d"].getDay()));
		setMonth(getMonthOfYear(newValue["$d"].getMonth()));
		setYear(newValue["$d"].getFullYear());
	}

	return (
		<Box className='rounded-lg' sx={{ width: "100%", height: "100vh" }}>
			<Stack className='rounded-lg' direction={"row"} sx={{ minHeight: 600 }}>
				<Paper className='rounded-lg bg-blue-500' sx={{ width: 350, p: 0 }}>
					<Stack
						className=' bg-blue-500'
						direction={"column"}
						spacing={2}
						sx={{
							pb: 2,
							width: "100%",
							height: "100%",
							display: "flex",
							justifyContent: "space-between",
						}}>
						<Box
							className='widgets '
							sx={{
								display: "flex",
								justifyContent: "space-between",
								gap: 2,
								p: 2,
							}}>
							<Stack direction={"column"} spacing={1}>
								<Typography fontSize={25} color={"white"}>
									{month}
								</Typography>
								<Typography fontSize={38} color={"white"}>
									{dayNum}
								</Typography>
								<Typography color={"white"}>{dayWeek}</Typography>
							</Stack>
							<Stack direction={"column"} justifyContent={"center"} spacing={1}>
								<Typography color={"white"}>
									<ContrastIcon fontSize='sm' />
								</Typography>
								<Typography fontSize={"sm"} color={"white"}>
									<WbSunnyIcon fontSize='sm' />
									11º
								</Typography>
								<Typography color={"white"}>
									{time.toLocaleTimeString()}
								</Typography>
							</Stack>
						</Box>
						<Box className='border border-y-2' sx={{ height: 300 }}>
							<SelectList target={date} />
						</Box>
						<Box
							className=''
							sx={{
								height: "12%",
								display: "flex",
								justifyContent: "center",
								alignItems: "flex-end",
							}}>
							{/* <Button sx={{ color: "white" }}  > + Add Event</Button> */}
							<DialogForm date={date} />
						</Box>
					</Stack>
				</Paper>
				<Paper className=' bg-green-100' sx={{}}>
					<Stack direction={"column"}>
						{/* Calendar */}
						<Box className='' sx={{}}>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DateCalendar
									sx={{ width: 450 }}
									value={value}
									onChange={(newValue) => {
										handleOnChange(newValue);
									}}
								/>
							</LocalizationProvider>
						</Box>
						{/*  */}
						<Box className='' sx={{}}>

						</Box>
					</Stack>
				</Paper>
			</Stack>
		</Box>
	);
}
