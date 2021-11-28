import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { userLogout } from 'actions/user';

const ResponsiveAppBar = () => {

	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();
	const { user, isLoggedIn } = useSelector(state => state.user);

	const logout = () => {
		dispatch(userLogout(location, navigate));
	}

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        	<div style={{
        		width: '100%',
        		display: 'flex',
        		justifyContent: 'space-between'
        	}}>
        		<div style={{display: 'flex'}}>
			      	<CustomLink to="/">
			          <Typography variant="h6" textAlign="center" style={{marginRight: 10}}>Home</Typography>
			      	</CustomLink>
			      	<CustomLink to="/admin">
			          <Typography variant="h6" textAlign="center">Admin</Typography>
			      	</CustomLink>
        		</div>
	          <div>
	          	{
	          		isLoggedIn ?
	          		(
	          			<div style={{display: 'flex'}}>
				            <Typography
					            variant="h6"
					            noWrap
					            component="div"
					            style={{marginRight: 20}}
					          >
					            Hola {user.email}
					          </Typography>
					          <Typography
					            variant="h6"
					            noWrap
					            component="div"
					            onClick={logout}
					            style={{
					            	cursor: 'pointer'
					            }}
					          >
					            Logout
					          </Typography>
	          			</div>
	          		)
	          		:
	          		(null)
	          	}
	          </div>
        	</div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

function CustomLink(props) {
	const { to } = props;
	return (
		<Link 
			to={to} 
			style={{
				textDecoration: 'none',
				color: 'white'
			}}>
			{props.children}
		</Link>
	);
}