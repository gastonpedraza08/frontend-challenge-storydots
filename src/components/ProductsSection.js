import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

import Product from './Product';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '400px',
}));

export default function ProductsSection() {
	const { products } = useSelector(state => state.products);
  return (
    <div>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} style={{alignContent: 'center'}} spacing={1}>
        {products.map(product => (
          <Item key={product.id} sx={{ height: 'auto' }}>
          	<Product product={product} />
          </Item>
        ))}
      </Masonry>
    </div>
  );
}
