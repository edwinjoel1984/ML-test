import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {getProducts} from '../../services/product.service'

const ProductList = ({utmInfo}) => {
const [products, setProducts] = useState([]);
useEffect(() => {
    async function getAllProducts() {
        const urlParams = new URLSearchParams(utmInfo);
        const search = urlParams.get('search');
        if(search){
            const response = await getProducts(search);
            setProducts(response.data.items);
        }
    }
    // if (props.funnel_id) 
    getAllProducts();
}, [])
    return (
        <>
        {products.map(product=>{
            return (<p><Link to={`/items/${product.id}`}>{product.title}</Link></p>)
        })}
        </>
    );
}

export default ProductList;