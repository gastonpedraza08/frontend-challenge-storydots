import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { productsLoadAllproducts } from 'actions/products';

import ProductsSection from 'components/ProductsSection';
import ScrollHelper from 'components/shared/ScrollHelper';

export default function Home() {

	const dispatch = useDispatch();
	const { products } = useSelector(state => state.products);

	useEffect(() => {
		dispatch(productsLoadAllproducts());
	}, [dispatch]);

	return (
		<div>
			<ProductsSection />
			<ScrollHelper 
				beforeOnScreen={100}
				onScreen={myFunc}
				timeDebounce={400}
			/>
			<div style={{height: 1000}}>
				Mas contenido
			</div>
		</div>
	);
}

function myFunc() {
	console.log("holaaa")
}