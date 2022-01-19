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
    <Link href="dashboard">
		<ListItem button>
		<ListItemIcon>
			<DashboardIcon />
		</ListItemIcon>
		<ListItemText primary="Dashboard" />
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

    <Link href="https://www.google.com">
		<ListItem button>
		<ListItemIcon>
			<PeopleIcon />
		</ListItemIcon>
		<ListItemText primary="Customers" />
		</ListItem>
	</Link>

	<Link href="https://www.google.com">
		<ListItem button>
		<ListItemIcon>
			<BarChartIcon />
		</ListItemIcon>
		<ListItemText primary="Reports" />
		</ListItem>
	</Link>

    

	<Link href="https://www.google.com">
		<ListItem button>
		<ListItemIcon>
			<LayersIcon />
		</ListItemIcon>
		<ListItemText primary="Integrations" />
		</ListItem>
	</Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);