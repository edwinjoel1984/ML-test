const axios = require('axios');
const apiUrl ="https://api.mercadolibre.com"
let responseSchema ={
    author: {
        name: 'Edwin',
        lastname: 'Ulloa'
    }, 
}
//Get All Products
const getProducts = async (req, res) => {
    try {
        const products = await axios.get(`${apiUrl}/sites/MLA/search?q=${req.query.q}`);
        //Filter Categories
        const categories_list = products.data.filters.find(item=>item.id=='category');
        //Map categories by required structure [String, String]
        const categories = categories_list ? categories_list.values[0].path_from_root.map(cat=>cat.name): [];
        const response = {
           ...responseSchema,
            categories, 
            items: products.data.results.slice(0, 4),
            ...products.data
        }
      return res.send(response)
    } catch (error) {
      console.error(error)
    }
  }
const getProductByID = async (req, res) => {
    try {
        const product = await axios.get(`${apiUrl}/items/${req.params.id}`);
        return res.send({...responseSchema, item: product.data})
    } catch (error) {
      res.sendStatus(error.response.status);
    }
  }
const getProductDescriptionByID = async (req, res) => {
    try {
        const product = await axios.get(`${apiUrl}/items/${req.params.id}/description`);
      return res.send({...responseSchema, description: product.data})
    } catch (error) {
      res.sendStatus(error.response.status);
    }
  }


  module.exports = {
      getProducts, getProductByID, getProductDescriptionByID
  }