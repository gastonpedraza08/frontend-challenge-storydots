import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { productsLoadAllproducts, clearAllProducts } from 'actions/products';

import ProductsSection from 'components/ProductsSection';
import ScrollHelper from 'components/shared/ScrollHelper';

export default function Home() {

	const dispatch = useDispatch();
	const { products } = useSelector(state => state.products);

	const myFunc = useCallback(function myFunc() {
		console.log("deben cargarse mas productos")
	}, []);

	console.log(products)

	useEffect(() => {
		if (products.length===0) {
			dispatch(productsLoadAllproducts());
		}
	}, [dispatch]);

	return (
		<div>
			<ProductsSection />
			<ScrollHelper 
				beforeOnScreen={100}
				onScreen={myFunc}
				timeDebounce={400}
			/>
			<button 
				onClick={() => {
					dispatch(productsLoadAllproducts());
				}}
			>Cargar Mas</button>
			<div style={{height: 1000}}>
				Mas contenido
			</div>
		</div>
	);
}