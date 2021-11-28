import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';

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
		<Box
			sx={{
    		width: {
		      xs: '90vw',
		      sm: '85vw',
		      md: '80vw',
		      lg: '75vw',
		      xl: '70vw',
		    },
		    marginLeft: 'auto',
		    marginRight: 'auto',
		    marginTop: '40px'
		  }}
		>
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
		</Box>
	);
}