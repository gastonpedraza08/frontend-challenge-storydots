import React from 'react';
import Box from '@mui/material/Box';

export default function Product({product}) {
	return (
		<div
			style={{
				width: '100%',
				minHeight: 'auto'
			}}
		>
			<div style={{
				backgroundImage: `url(${product.image_url})`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				width: '100%',
				height: '200px',
			}}>
			</div>
			<div>
				{product.name}
			</div>
			<div>
				{product.price}
			</div>
		</div>
	);
}
