import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Table from 'components/Table';

export default function Admin() {

	const navigate = useNavigate();
	const location = useLocation();
	const [isChecking, setIsChecking] = useState(true);


	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (!user) {
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
		<div>
			<Table />
		</div>
	);
}