import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

import { fetchWithoutToken } from 'helpers/fetch';

const loadServerRows = async (page, pageSize) => {
	let nPage = Number(page) + 1;
	try {
		const result = await fetchWithoutToken(`products?page=${nPage}&limit=${pageSize}`);
	  return {
	  	products: result.data.products,
	  	count: result.data.count
	  };
	} catch (e) {
		console.log(e)
		return {
			products: [],
			count: 0
		}
	}
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
	],
	rows: [
	]

}

export default function ServerPaginationGrid() {

  const [pageSize, setPageSize] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [rowCount, setRowCount] = React.useState(0);


  React.useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);
      const { products, count } = await loadServerRows(page, pageSize);

      if (!active) {
        return;
      }

      setRows(products);
      setRowCount(count);
      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [page, data, pageSize]);

  return (
    <div style={{ height: 'calc(100vh - 64px)', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={data.columns}
        pagination
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 15, 20, 50, 100]}
        rowCount={rowCount}
        paginationMode="server"
        onPageChange={(newPage) => setPage(newPage)}
        loading={loading}
      />
      <div>
      	
      </div>
    </div>
  );
}
