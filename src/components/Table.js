import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

import { productsLoadProductsAdmin, productsDeleteProduct } from 'actions/products';
import { fetchWithoutToken } from 'helpers/fetch';

function MyCustomButton(props) {
	const dispatch = useDispatch();
	const { id } = props;
	return (
		<span 
			onClick={(e) => {
				e.stopPropagation();
				dispatch(productsDeleteProduct(id));
			}}
			style={{
				color: 'red',
				cursor: 'pointer',
				margin: '0px 7px'
			}}
		>
			Eliminar
		</span>
	);
}

const data = {
	columns: [
		{
			field: 'id',
			headerName: 'Id',
			width: 60
		},
		{
			field: 'name',
			headerName: 'Nombre',
			width: 220
		},
		{
			field: 'description',
			headerName: 'Descripción',
			width: 220
		},
		{
			field: 'image_url',
			headerName: 'Url imagen',
			width: 120
		},
		{
			field: 'price',
			headerName: 'Precio',
			width: 120
		},
		{
			field: 'brandId',
			headerName: 'Id Marca',
			width: 120
		},
		/*custom cell*/
		{
	    field: "edit",
	    headerName: "Acciones",
	    width: 150,
	    sortable: false,
	    renderCell: (params) => {
	      return (
	      	<div>
	      		<Link 
	      			to={`/admin/edit/product/${params.row.id}`}
	      			
	      			style={{
	      				textDecoration: 'none',
	      				color: 'blue'
	      			}}
	      		>Editar</Link>
	      		<MyCustomButton id={params.row.id} />
	      		<Link 
	      			to={`/product/${params.row.id}`}
	      			target="_blank"
	      			style={{
	      				textDecoration: 'none',
	      				color: 'green'
	      			}}
	      		>Ver</Link>
	      	</div>
	      );
	    }
	  },
	],
}

export default function ServerPaginationGrid() {

	const dispatch = useDispatch();
	const { productsAdmin: { products, count }} = useSelector(state => state.products);
	const { uiLoadingAllProductsAdmin: { isLoading }} = useSelector(state => state.ui);

  const [pageSize, setPageSize] = useState(() => {
  	let pgSize = localStorage.getItem('pageSize');
  	try {
	  	if (pgSize) {
	  		return Number(pgSize);
	  	} else {
	  		return 10;
	  	}
  	} catch (e) {
  		console.log(e);
  	}
  });
  const [page, setPage] = useState(() => {
  	let pg = localStorage.getItem('page');

  	try {
	  	if (pg) {
	  		return Number(pg);
	  	} else {
	  		return 0;
	  	}
  	} catch (e) {
  		console.log(e);
  	}
  });

  useEffect(() => {
    dispatch(productsLoadProductsAdmin(page, pageSize));
  }, [page, data, pageSize]);

  return (
    <div style={{ height: 'calc(100vh - 64px)', width: '100%' }}>
      <DataGrid
        rows={products}
        columns={data.columns}
        pagination
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => {
        	localStorage.setItem('pageSize', newPageSize);
        	setPageSize(newPageSize);
        }}
        rowsPerPageOptions={[5, 10, 15, 20, 50, 100]}
        rowCount={count}
        page={page}
        paginationMode="server"
        onPageChange={(newPage) => {
        	localStorage.setItem('page', newPage);
        	setPage(newPage);
        }}
        loading={isLoading}
      />
    </div>
  );
}
