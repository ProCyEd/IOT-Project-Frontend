import * as React from 'react';
import Link from 'next/link';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DevicesIcon from '@mui/icons-material/Devices';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
  <div>
    <Link href="addBox">
		<ListItem button>
		<ListItemIcon>
			<DashboardIcon />
		</ListItemIcon>
		<ListItemText primary="Add Box" />
		</ListItem>
	</Link>

	<Link href="removeBox">
		<ListItem button>
		<ListItemIcon>
			<DashboardIcon />
		</ListItemIcon>
		<ListItemText primary="Remove Box" />
		</ListItem>
	</Link>
	
    <Link href="devices">
		<ListItem button>
		<ListItemIcon>
			{/* <ShoppingCartIcon /> */}
			<DevicesIcon></DevicesIcon>
		</ListItemIcon>
		<ListItemText primary="Devices" />
		</ListItem>
	</Link>

  </div>
);

export const secondaryListItems = (
  <div>
   
  </div>
);