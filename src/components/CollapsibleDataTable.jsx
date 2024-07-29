/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";




function DataTableRow({ row, historyHeaders, dataKeys }) {
	// const { row, historyHeaders } = props;
	const [open, setOpen] = React.useState(false);
	return (
		<React.Fragment>
			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
				<TableCell>
					<IconButton
						aria-label='expand row'
						size='small'
						onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				{dataKeys.map((key, index) =>
					index == 0 ? (
						<TableCell key={index} component='th' scope='row'>
							{row[key]}
						</TableCell>
					) : (
						<TableCell key={index} align='right'>
							{row[key]}
						</TableCell>
					)
				)}
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant='h6' gutterBottom component='div'>
								History
							</Typography>
							<Table size='small' aria-label='purchases'>
								<TableHead>
									<TableRow>
										{historyHeaders.map((historyRow, index) => (
											<TableCell
												key={index}
												align={index <= 1 ? "left" : "right"}>
												{historyRow}
											</TableCell>
										))}
									</TableRow>
								</TableHead>
								<TableBody>
									{row.history.map((historyRow) => (
										<TableRow key={historyRow.date}>
											<TableCell component='th' scope='row'>
												{historyRow.date}
											</TableCell>
											<TableCell>{historyRow.customerId}</TableCell>
											<TableCell align='right'>{historyRow.amount}</TableCell>
											<TableCell align='right'>
												{Math.round(historyRow.amount * row.price * 100) / 100}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

export default function DataTable({ mainCol, headers, data, historyHeaders,rowDataKeys }) {
	return (
		<TableContainer component={Paper}>
			<Table size='small' aria-label='collapsible table'>
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell>{mainCol}</TableCell>
						{headers.map((item, index) => (
							<TableCell key={index} align='right'>
								{item}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((item) => (
						<DataTableRow key={item.name} row={item} historyHeaders={historyHeaders} dataKeys={rowDataKeys} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
