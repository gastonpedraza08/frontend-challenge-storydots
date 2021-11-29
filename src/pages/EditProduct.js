import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchWithoutToken } from 'helpers/fetch';

export default function EditProductScreen() {

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

	console.log(product)

	return (
		<div>
			Edit Product Screen
		</div>
	);
}