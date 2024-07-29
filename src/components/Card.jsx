/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import { Share, FavoriteOutlined } from "@mui/icons-material";



export default function MultiActionAreaCard({title,description,image}) {
	return (
		<Card
			variant='elevation'
			elevation={0}
			sx={{
				p: 0,
				m: 0,
				maxWidth: "100%",
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				justifyContent: "center",
			}}>
			<CardActionArea>
				<CardMedia component='img' width={"100%"} image={image} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{title}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			{/* <CardActions>
				<IconButton size='small' color='primary'>
					<Share />
				</IconButton>
				<IconButton size='small' color='' >
					<FavoriteOutlined />
				</IconButton>
			</CardActions> */}
		</Card>
	);
}

