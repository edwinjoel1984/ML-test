const express = require("express");
const cors = require('cors');
const app = express();
const { getProducts, getProductByID, getProductDescriptionByID } = require('./product');

//Only Accept request from http://localhost:3000
app.use(cors({origin: 'http://localhost:3001', credentials: true}));

var productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProductByID);
productRouter.get('/:id/description', getProductDescriptionByID);
app.use('/api/items', productRouter);
app.listen(5000, () => console.log("Servidor listo ..."));