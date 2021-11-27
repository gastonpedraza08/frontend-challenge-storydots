import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchWithoutToken } from 'helpers/fetch';
import { productsLoadAllproducts } from 'actions/ui';

export default function Home() {

	const dispatch = useDispatch();
	const { products } = useSelector(state => state.products);

	useEffect(async () => {
		dispatch(productsLoadAllproducts());
	}, [dispatch]);

	console.log(products)

	return (
		<div>
			Home
		</div>
	);
}