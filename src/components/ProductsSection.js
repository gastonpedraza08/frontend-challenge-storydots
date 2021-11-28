import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  border: '1px solid black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function ProductsSection() {
	const { products } = useSelector(state => state.products);
  return (
    <Box sx={{ width: 500 }}>
      <Masonry columns={4} spacing={1}>
        {products.map(product => (
          <Item key={product.id} sx={{ height: 200 }}>
            {product.name}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
