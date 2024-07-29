/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import { AppContext } from "../context/AppContext";


function DialogDatePicker({textField}) {
	const [value, setValue] = React.useState(null);
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
			slotsProps={{textField:{inputProps:{id:"eventDate", name:"date", label:'Start Date'}}}}
	
				value={value}
				onChange={(newValue) => setValue(newValue)}
				
			/>
		</LocalizationProvider>
	);
}

function DialogTimePicker() {
	const [value, setValue] = React.useState(null);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Stack spacing={2} sx={{ minWidth: 305 }}>
				<TimePicker
					value={value}
					onChange={setValue}
					referenceDate={dayjs("2022-04-17")}
				/>
				<Typography>
					Stored value: {value == null ? "null" : value.format()}
				</Typography>
			</Stack>
		</LocalizationProvider>
	);
}


export default function FormDialog({date=''}) {
	const [open, setOpen] = React.useState(false);
	const { calendarEvents, addNewCalendarEvents } = React.useContext(AppContext);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		// console.log(date)
		setOpen(false);
	};



	return (
		<React.Fragment>
			<Button
				sx={{ color: "white" }}
				variant='standard'
				onClick={handleClickOpen}>
				{/* Open form dialog */}+ Add event
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				PaperProps={{
					component: "form",
					onSubmit: (event) => {
						event.preventDefault();
						const formData = new FormData(event.currentTarget);
						const formJson = Object.fromEntries(formData.entries());
						const title = formJson.title;
						const date = formJson.date;
						const from = formJson.from;
						const to = formJson.to;
						addNewCalendarEvents(title, from, to, date);

						console.log(title, from, to, date);
						handleClose();
					},
				}}>
				<DialogTitle>New Event</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To subscribe to this website, please enter your email address here.
						We will send updates occasionally.
					</DialogContentText>

					<TextField
						required
						defaultValue={"New Event"}
						margin='dense'
						id='eventTitle'
						name='title'
						label='Title'
						type='text'
						fullWidth
						variant='standard'
					/>
					{/* <DialogDatePicker
						textField={
							<TextField
								required
								defaultValue={date}
								margin='dense'
								id='eventDate'
								name='date'
								label='Date'
								type='date'
								fullWidth
								variant='standard'
							/>
						}
					/> */}
					<TextField
						required
						defaultValue={date}
						margin='dense'
						id='eventDate'
						name='date'
						label='Date'
						type='date'
						fullWidth
						variant='standard'
					/>
					<TextField
						margin='dense'
						id='eventFrom'
						name='from'
						label='From'
						type='time'
						fullWidth
						variant='standard'
						defaultValue={"00:00"}
					/>
					<TextField
						margin='dense'
						id='eventTo'
						name='to'
						label='To'
						type='time'
						fullWidth
						variant='standard'
						defaultValue={"23:59"}
					/>
					{/* <TextField
						autoFocus
						required
						margin='dense'
						id='name'
						name='email'
						label='Email Address'
						type='email'
						fullWidth
						variant='standard'
					/> */}
				</DialogContent>
				<DialogActions>
					<Button color={"warning"} variant={"outlined"} onClick={handleClose}>
						Cancel
					</Button>
					<Button color={"primary"} variant={"contained"} type='submit'>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
