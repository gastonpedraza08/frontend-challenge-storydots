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
			<div
				style={{
					padding: '10px 10px',
					wordBreak: 'break-all'
				}}
			>
				<div>
					{product.name}
				</div>
				<div
					style={{
						color: 'black',
						fontSize: '16px',
						marginTop: '10px',
					}}
				>
					$ {product.price}
				</div>
			</div>
		</div>
	);
}
