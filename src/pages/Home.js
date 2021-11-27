import React, { useEffect } from 'react';

import { fetchWithoutToken } from '../helpers/fetch';

export default function Home() {

	useEffect(async () => {
		const result = await fetchWithoutToken('products');
		console.log(result)
	}, []);

	return (
		<div>
			Home
		</div>
	);
}