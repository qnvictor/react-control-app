/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Typography from "@mui/material/Typography";
import {
	Link as RouterLink,
	Outlet,
	Route,
	Routes,
	MemoryRouter,
	useLocation,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { Button, ListItemButton } from "@mui/material";

// Icons
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InfoIcon from "@mui/icons-material/Info";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import TableBarIcon from "@mui/icons-material/TableBar";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PowerIcon from "@mui/icons-material/Power";
import BoltIcon from "@mui/icons-material/Bolt";
import TungstenIcon from "@mui/icons-material/Tungsten";
import OutletIcon from "@mui/icons-material/Outlet";
import LightIcon from "@mui/icons-material/Light";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";


const tooltipProps = {
        popper: {
          sx: {
            [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
              {
                marginTop: '0px',
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
              {
                marginBottom: '0px',
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
              {
                marginLeft: '0px',
              },
            [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
              {
                marginRight: '0px',
              },
          },
        },
      }

function Router(props) {
	const { children } = props;
	if (typeof window === "undefined") {
		return <StaticRouter location='/drafts'>{children}</StaticRouter>;
	}

	return (
		<MemoryRouter initialEntries={["/drafts"]} initialIndex={0}>
			{children}
		</MemoryRouter>
	);
}

Router.propTypes = {
	children: PropTypes.node,
};

const Link = React.forwardRef(function Link(itemProps, ref) {
	return (
		<RouterLink
			className=' bg-white space-y-3 hover:bg-sky-500 hover:ring-sky-500'
			ref={ref}
			{...itemProps}
			role={undefined}
		/>
	);
});

function ListItemLink(props) {
	const [active , setActive]=React.useState(false)
	const { icon, primary, to } = props;

	return (
		<li>
			<ListItemButton
			
				className=' bg-white space-y-3 hover:bg-sky-500 hover:ring-sky-500'
				component={Link}
				onClick={(e)=> setActive(!active)}
				to={to}>
				{icon ? (
					<Tooltip title={primary} placement='right' slotProps={tooltipProps}>
						<ListItemIcon>{icon}</ListItemIcon>
					</Tooltip>
				) : null}
				<ListItemText primary={primary} />
			</ListItemButton>
		</li>
	);
}

ListItemLink.propTypes = {
	icon: PropTypes.element,
	primary: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};

function Content() {
	const location = useLocation();
	return (
		<Typography variant='body2' sx={{ pb: 2 }} color='text.secondary'>
			Current route: {location.pathname}
		</Typography>
	);
}

export default function ListRouter() {
	return (
		<>
			<Paper elevation={0}>
				<List aria-label='main links'>
						<ListItemLink to='/' primary='Home' icon={<HomeIcon />} />

					<ListItemLink
						to='/restaurant'
						primary='Restaurant'
						icon={<RestaurantIcon />}
					/>
					<ListItemLink
						to='/dashboard'
						primary='Dashboard'
						icon={<DashboardIcon />}
					/>
					<ListItemLink to='/pos' primary='POS' icon={<PointOfSaleIcon />} />
					<ListItemLink to='/menu' primary='Menu' icon={<MenuBookIcon />} />
					<ListItemLink
						to='/tables'
						primary='Tables'
						icon={<TableRestaurantIcon />}
					/>
					<ListItemLink to='/users' primary='Users' icon={<GroupIcon />} />
					<ListItemLink
						to='/inventory'
						primary='Inventory'
						icon={<InventoryIcon />}
					/>
				</List>
				<Divider />
				<List aria-label='secondary mailbox folders'>
					<ListItemLink
						to='/settings'
						primary='Settings'
						icon={<SettingsIcon />}
					/>
					<ListItemLink to='/help' primary='Help' icon={<HelpOutlineIcon />} />
				</List>
			</Paper>

			{/* <Outlet /> */}
		</>
	);
}
