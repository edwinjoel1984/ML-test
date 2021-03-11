import axios from 'axios'

export const getProducts = (_query) => {
    return axios({
      method: "GET",
      url: `http://localhost:5000/api/items?q=${_query}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
export const getProductByID = (productId) => {
    return axios({
      method: "GET",
      url: `http://localhost:5000/api/items/${productId}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };