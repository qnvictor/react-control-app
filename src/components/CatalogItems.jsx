/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { red, green, blue } from "@mui/material/colors";

const Root = styled("div")(({ theme }) => ({
	padding: theme.spacing(1),
	[theme.breakpoints.down("md")]: {
		backgroundColor: red[500],
	},
	[theme.breakpoints.up("md")]: {
		backgroundColor: blue[500],
	},
	[theme.breakpoints.up("lg")]: {
		backgroundColor: green[500],
	},
}));

export default function TitlebarImageList({header, items}) {
    
	return (
		<ImageList gap={10} sx={{ width: "100%", height: "100%" }}>
			<ImageListItem key='Subheader' cols={3}>
				<ListSubheader component='div'>{header}</ListSubheader>
			</ImageListItem>
			{items.map((item) => (
				<ImageListItem key={item.img}>
					<img
						className=' hover:opacity-80 border rounded-lg hover:cursor-pointer'
						srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=22x`}
						src={`${item.img}?w=248&fit=crop&auto=format`}
						alt={item.title}
						loading='lazy'
					/>
					<ImageListItemBar
						title={item.title}
						subtitle={item.author}
						actionIcon={
							<IconButton
								sx={{ color: "rgba(255, 255, 255, 0.54)" }}
								aria-label={`info about ${item.title}`}>
								<InfoIcon />
							</IconButton>
						}
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
}


