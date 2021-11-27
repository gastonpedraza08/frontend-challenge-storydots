import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { productsLoadAllproducts } from 'actions/products';

export default function Home() {

	const dispatch = useDispatch();
	const { products } = useSelector(state => state.products);

	useEffect(() => {
		dispatch(productsLoadAllproducts());
	}, [dispatch]);

	console.log(products)

	return (
		<div>
			Home
		</div>
	);
}