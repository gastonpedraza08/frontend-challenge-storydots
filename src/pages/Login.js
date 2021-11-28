import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { userLogin } from 'actions/user';

export default function LoginScreen() {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [email, setEmail] = useState('testuser@gmail.com');
	const [password, setPassword] = useState('1234');

	const handleSubmit = () => {
		dispatch(userLogin({ email, password }, navigate));
	}

	return (
		<div
			style={{
				height: 'calc(100vh - 64px)',
				width: '100vw',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Box
				style={{
					border: '1px solid #ccc',
					padding: '60px 20px',
				}}
				sx={{
	    		width: {
			      xs: '350px',
			      sm: '350px',
			      md: '400px',
			      lg: '400px',
			      xl: '400px',
			    },
			  }}
			>
				<Typography variant="h5" gutterBottom component="div">
		      Iniciar Sesión
		    </Typography>
		    <FormControl fullWidth>
		    	<TextField 
		    		id="outlined-basic" 
		    		label="Email" 
		    		variant="outlined" 
		    		value={email}
		    		onChange={e => {
		    			setEmail(e.target.value);
		    		}}
		    	/>
		    </FormControl>
		    <div
		    	style={{
		    		marginTop: 15,
		    		marginBottom: 15,
		    	}} 
		  	>
			    <FormControl fullWidth>
			    	<TextField 
			    		id="outlined-basic" 
			    		label="Password" 
			    		variant="outlined" 
			    		value={password}
			    		onChange={e => {
			    			setPassword(e.target.value);
			    		}}
			    	/>
			    </FormControl>
		    </div>
		    <Button 
		    	variant="outlined"
		    	onClick={() => {
		    		handleSubmit();
		    	}}
		    >Aceptar</Button>
			</Box>	
		</div>
	);
}