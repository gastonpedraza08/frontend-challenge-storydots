import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Admin() {

	const navigate = useNavigate();
	const location = useLocation();
	const [isChecking, setIsChecking] = useState(true);


	useEffect(() => {
		const user = JSON.stringify(localStorage.getItem('user'));
		if (!user || user==='null') {
			localStorage.setItem('lastLocation', location.pathname);
			navigate('/login');
		} else {
			setIsChecking(false);
		}
	}, []);

	if (isChecking) {
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
			Cargando...
			</div>
		);
	}

	return (
		<div style={{height:1500}}>
			Admin
		</div>
	);
}