import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import { fetchWithoutToken } from 'helpers/fetch';

export default function ProductPage() {

	const { productId } = useParams();
	const [product, setProduct] = useState(undefined);

	useEffect(() => {
		async function getProduct() {
			const result = await fetchWithoutToken('products/' + productId);
			setProduct(result.data.product);
		}
		getProduct();
	}, []);

	if (!product) {
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
			<div
				style={{
					display: 'flex',
					marginTop: 40,
					paddingRight: 60
				}}
			>
				<div
					style={{
						flexBasis: '40%',
						height: '350px',
					}}
				>
					<div
						style={{
							backgroundImage: `url(${product.image_url})`,
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'contain',
							width: '100%',
							height: '100%',
						}}
					>
					</div>
				</div>
				<div
					style={{
						flexBasis: '60%',
						paddingLeft: 24
					}}
				>
					<Typography variant="h4" gutterBottom component="div">
		     		{product.name}   
		      </Typography>
		      <Typography variant="h6" gutterBottom component="div">
		        $ {product.price}
		      </Typography>
					<div dangerouslySetInnerHTML={{ __html: product.description }} >
					</div>
				</div>
			</div>
		</div>
	);
}