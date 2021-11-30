import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';

import { productsCreateProduct } from 'actions/products';
import { fetchWithoutToken } from 'helpers/fetch';

export default function ProductForm(props) {

	const [description, setDescription] = useState('');
	const [brandId, setBrandId] = useState('');
	const [base64, setBase64] = useState(undefined);
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');

	const inputRef = useRef(null);
	const dispatch = useDispatch();

	const cleanForm = () => {
		setDescription('');
		setBrandId('');
		setBase64(undefined);
		setName('');
		setPrice('');
	}

	const submit = async e => {
		e.preventDefault();
		let data = {
			name: e.target.elements.name.value,
			description,
			base64: base64.content,
			price: e.target.elements.price.value,
			brandId
		}
		dispatch(productsCreateProduct(data, cleanForm));
	}

	return (
		<Box
			sx={{
    		width: {
		      xs: '90%',
		      sm: '85%',
		      md: '80%',
		      lg: '75%',
		      xl: '70%',
		    },
		  }}
		  style={{
		  	margin: '10px auto'
		  }}
		>
			<form onSubmit={e => submit(e)}>

				<Grid container spacing={2}>
	        <Grid item xs={12} sm={6} md={4}>
						<TextField 
							style={{width: '100%'}} 
							type="text" 
							inputProps={{name: 'name'}} 
							placeholder="name"
							value={name}
							onChange={e => setName(e.target.value)}
					  />			
	        </Grid>
	        <Grid item xs={12} sm={6} md={4}>
						<TextField 
							style={{width: '100%'}} 
							type="text" 
							inputProps={{name: 'price'}} 
							placeholder="price" 
							value={price}
							onChange={e => setPrice(e.target.value)}
						/>		
	        </Grid>
	        <Grid item xs={12} sm={6} md={4}>
						<BasicSelect 
							brandId={brandId} 
							setBrandId={setBrandId} 		
						/>
	        </Grid>
	      </Grid>

				<FormControl fullWidth style={{margin: '20px auto'}}>
					<DescriptionEditor 
						description={description} 
						setDescription={setDescription}
					/>
				</FormControl>
				<div style={{display: 'block'}}>
	        <input
	        	style={{display: 'none'}}
	          type="file"
	          accept="image/*"
	          ref={inputRef}
	          onChange={ async (e) => setBase64(await getBase64(e.target.files[0]))}
	        />
		      <div>
		        <Button
		          variant="outlined"
		          onClick={() => inputRef.current.click()}
		        >
		          {
		          	base64 ?
		          	(
		          		"Cambiar Imagen"
		          	)
		          	:
		          	(
		          		"Agregar Imagen"
		          	)
		          }
		        </Button>
	        	{
	          	base64 ?
	          	(
	          		" " + base64.name
	          	)
	          	:
	          	(null)
	          }
		      </div>
				</div>
				<Button 
		    	variant="outlined"
		    	type="submit"
		    	style={{
		    		height: 40,
		    		marginTop: 10,
		    		display: 'block'
		    	}}
		    >Crear Producto</Button>
			</form>
		</Box>
	);
}

function getBase64(file) {
	return new Promise((resolve, reject) => {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     resolve({
     	content: reader.result,
     	name: file.name
     });
   };
   reader.onerror = function (error) {
     reject(error);
   };
	});
}




function DescriptionEditor(props) {

	const { setDescription, description } = props;

	return (
			<CKEditor
				editor={ClassicEditor}
				data={description}
				config={{
            removePlugins: ['ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed', 'EasyImage']
          }}
				onBlur={(event, editor) => {
					const data = editor.getData();
					setDescription(data);
				}}
			/>
	);
}


function BasicSelect({brandId, setBrandId}) {
  
  const handleChange = (event) => {
    setBrandId(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Marca</InputLabel>
        <Select
          value={brandId}
          label="Marca"
          onChange={handleChange}
        >
          <MenuItem value={1}>Samsung</MenuItem>
          <MenuItem value={2}>Xiaomi</MenuItem>
          <MenuItem value={3}>Apple</MenuItem>
          <MenuItem value={4}>Motorola</MenuItem>
          <MenuItem value={5}>LG</MenuItem>
          <MenuItem value={6}>Nokia</MenuItem>
          <MenuItem value={7}>Huawei</MenuItem>
          <MenuItem value={8}>Sony</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}