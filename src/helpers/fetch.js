import axios from 'axios';
let baseUrl;
if (process.env.NODE_ENV !== 'production') {
	baseUrl = process.env.REACT_APP_API_URL_DEV;
} else {
	baseUrl = process.env.REACT_APP_API_URL;
}

export const fetchWithoutToken = async (endpoint, data, method = 'GET') => {
  try {
    const url = `${baseUrl}/${endpoint}`;
    if (method === 'GET') {
      const result = await axios({
        method,
        url,
      });
      return result;
    } else {
      const result = await axios({
        headers: {
          'content-type': 'application/json',
        },
        method,
        url,
        data,
      });
      return result;
    }
  } catch (error) {
    if (error.response) {
      return {
        error: error.response.data.error
          ? error.response.data.error
          : 'Error en el servidor',
      };
    }
    return { error: 'Error en el servidor ' };
  }
};