import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

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
			{
				isLoading ?
				(
					<div
						style={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							marginTop: 20
						}}
					>
						<CircularProgress />
					</div>
				)
				:
				(null)
			}
			<div style={{height: 50}}></div>
		</Box>
	);
}