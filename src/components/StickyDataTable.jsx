/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";


import { AppContext } from "../context/AppContext";



function createData(name, code, population, size) {
	const density = population / size;
	return { name, code, population, size, density };
}





export function BodyDataTable({dataRows, dataColumns,currentPage,rowsPerPage}){
	return (
		<>
			<TableBody>
				{dataRows
					.slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
					.map((row) => {
						return (
							<TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
								{dataColumns.map((column) => {
									const value = row[column.id];
									return (
										<TableCell key={column.id} align={column.align}>
											{column.format && typeof value === "number"
												? column.format(value)
												: value}
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
			</TableBody>
		</>
	);

}

export function HeaderDataTable({dataColumns}){
	return (
		<>
			<TableHead>
				<TableRow>
					{dataColumns.map((column) => (
						<TableCell
							key={column.id}
							align={column.align}
							style={{ minWidth: column.minWidth }}>
							{column.label}
						</TableCell>
					))}
				</TableRow>
			</TableHead>
		</>
	);
}

export default function StickyDataTable({data, columns, fnDataRow}) {

	// const {densityPopulation} = React.useContext(AppContext)
	
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};
	
	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	
	// const dataRows = data.map((row) =>
	// 	createData(row.name, row.code, row.population, row.size, row.density)
	// );


	return (
		<Paper sx={{ width: "100%", overflow: "hidden" }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table size="small" stickyHeader aria-label='sticky table'>
					<HeaderDataTable dataColumns={columns}/>
					<BodyDataTable 
						dataRows={data} 
						dataColumns={columns} 
						currentPage={page} 
						rowsPerPage={rowsPerPage}
						/>
					<TablePagination 
						rowsPerPageOptions={[10, 25, 100]}
						component='div'
						count={data.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
						/>
				</Table>
			</TableContainer>
		</Paper>
	);
}
