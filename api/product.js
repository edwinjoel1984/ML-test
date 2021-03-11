const axios = require('axios');
const apiUrl ="https://api.mercadolibre.com"
let responseSchema ={
    author: {
        name: 'Edwin',
        lastname: 'Ulloa'
    }, 
}

const getProducts = async (req, res) => {
    try {
        const products = await axios.get(`${apiUrl}/sites/MLA/search?q=${req.query.q}`);
        const categories_list = products.data.available_filters.find(item=>item.id=='category');
        const categories = categories_list.values.map(item=>item.name);
        const response = {
           ...responseSchema,
            categories, 
            items: products.data.results
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
      console.error(error)
    }
  }
const getProductDescriptionByID = async (req, res) => {
    try {
        const product = await axios.get(`${apiUrl}/items/${req.params.id}/description`);
      return res.send({...responseSchema, description: product.data})
    } catch (error) {
      console.error(error)
    }
  }


  module.exports = {
      getProducts, getProductByID, getProductDescriptionByID
  }