import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';

import { productsLoadAllproducts } from 'actions/products';

import ProductsSection from 'components/ProductsSection';
import ScrollHelper from 'components/shared/ScrollHelper';

export default function Home() {

	const dispatch = useDispatch();
	const { products } = useSelector(state => state.products);
	const { uiLoadingAllProducts: { isLoading } } = useSelector(state => state.ui);

	const myFunc = useCallback(() => {
			console.log("debe cargar mas")
			console.log(isLoading)
			console.log(products.length)
		if (!isLoading) {
			dispatch(productsLoadAllproducts());
		}
	}, [isLoading]);

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
				timeDebounce={300}
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