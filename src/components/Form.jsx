/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react'
import { useForm } from 'react-hook-form';
import { Box, Button, FormControl, OutlinedInput, Paper, Typography } from '@mui/material'
import { Input } from '@mui/material';
import { AppContext } from '../context/AppContext';

export default function Form({ titleForm, fields }) {
	const {createDessert} = React.useContext(AppContext)
	const [formData,setFormData] = React.useState({})
	const {
		reset,
		register,
		handleSubmit,
		formState,
		formState: { errors, isSubmitSuccessful },
	} = useForm();

	const onSubmit = (data)=> {
		// setFormData({...data})
		console.log(data)
		createDessert(data)
		// reset({name:""})
		
	}

	const onCancel = ()=>{
		reset({
			name: "",
			calories: "",
			fat: "",
			carbs: "",
			protein: "",
			price: "",
		});
	}

	React.useEffect(()=>{
		if(formState.isSubmitSuccessful){
			reset({
				name: "",
				calories: "",
				fat: "",
				carbs: "",
				protein: "",
				price: "",
			});
		}
	},[formState, reset])

	return (
		<Box>
			<Paper
				component={"form"}
				onSubmit={handleSubmit(onSubmit)}
				sx={{
					width: 500,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "stretch",
					gap: 2,
					"& > :not(style)": { mb: 0.5 },
				}}>
				<Paper variant='elevation' elevation={0} sx={{ width: "100%", pl: 3 }}>
					<Typography fontWeight={"semibold"} variant={"h6"}>
						{titleForm}
					</Typography>
				</Paper>
				{/* start map */}
				{fields.map((field, index) => (
					<FormControl
						key={index}
						variant={"outlined"}
						size={"small"}
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							gap: 2,
						}}>
						<Typography
							sx={{ width: "25%", display: "flex", justifyContent: "flex-end" }}
							component={"label"}
							htmlFor={field.htmlFor}
							variant={"body1"}>
							{field.label}
						</Typography>
						<OutlinedInput
							{...register(field.name, { required: true })}
							sx={{ width: "15em" }}
							id={field.htmlFor}
							aria-describedby='component-helper-text'
						/>
					</FormControl>
				))}
				{/* end map */}
				<Box sx={{ display: "flex", justifyContent: "flex-end", p: 2, gap: 3 }}>
					<Button variant='outlined' color='warning' onClick={onCancel} >
						Cancel
					</Button>
					<Button type={"submit"} variant='contained'>
						Submit
					</Button>
				</Box>
			</Paper>
		</Box>
	);
}


{/* <FormControl
	variant={"outlined"}
	size={"small"}
	sx={{
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 2,
	}}>
	<Typography
		sx={{ width: "25%", display: "flex", justifyContent: "flex-end" }}
		component={"label"}
		htmlFor='component-name'
		variant={"body1"}>
		Name
	</Typography>
	<OutlinedInput
		{...register("name", { required: true })}
		sx={{ width: "15em" }}
		id='component-name'
		aria-describedby='component-helper-text'
	/>
</FormControl>
<FormControl
	variant={"outlined"}
	size={"small"}
	sx={{
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 2,
	}}>
	<Typography
		sx={{ width: "25%", display: "flex", justifyContent: "flex-end" }}
		component={"label"}
		htmlFor='component-calories'
		variant={"body1"}>
		Calories(g)
	</Typography>
	<OutlinedInput
		{...register("calories", { required: true })}
		sx={{ width: "15em" }}
		id='component-calories'
		aria-describedby='component-helper-text'
	/>
</FormControl>
<FormControl
	variant={"outlined"}
	size={"small"}
	sx={{
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 2,
	}}>
	<Typography
		sx={{ width: "25%", display: "flex", justifyContent: "flex-end" }}
		component={"label"}
		htmlFor='component-fat'
		variant={"body1"}>
		Fat(g)
	</Typography>
	<OutlinedInput
		{...register("fat", { required: true })}
		sx={{ width: "15em" }}
		id='component-fat'
		aria-describedby='component-helper-text'
	/>
</FormControl>
<FormControl
	variant={"outlined"}
	size={"small"}
	sx={{
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 2,
	}}>
	<Typography
		sx={{ width: "25%", display: "flex", justifyContent: "flex-end" }}
		component={"label"}
		htmlFor='component-carbs'
		variant={"body1"}>
		Carbs(g)
	</Typography>
	<OutlinedInput
		{...register("carbs", { required: true })}
		sx={{ width: "15em" }}
		id='component-carbs'
		aria-describedby='component-helper-text'
	/>
</FormControl>
<FormControl
	variant={"outlined"}
	size={"small"}
	sx={{
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 2,
	}}>
	<Typography
		sx={{ width: "25%", display: "flex", justifyContent: "flex-end" }}
		component={"label"}
		htmlFor='component-protein'
		variant={"body1"}>
		Protein(g)
	</Typography>
	<OutlinedInput
		{...register("protein", { required: true })}
		sx={{ width: "15em" }}
		id='component-protein'
		aria-describedby='component-helper-text'
	/>
</FormControl>
<FormControl
	variant={"outlined"}
	size={"small"}
	sx={{
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 2,
	}}>
	<Typography
		sx={{ width: "25%", display: "flex", justifyContent: "flex-end" }}
		component={"label"}
		htmlFor='component-price'
		variant={"body1"}>
		Price($)
	</Typography>
	<OutlinedInput
		{...register("price", { required: true })}
		sx={{ width: "15em" }}
		id='component-price'
		aria-describedby='component-helper-text'
	/>
</FormControl> */}