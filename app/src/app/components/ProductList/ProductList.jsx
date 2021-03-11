import React from 'react';
import {Link} from 'react-router-dom';



const ProductList = ({products}) => {
    return (
        <>
        
        {products.map(product=>{
            return (<p><Link to={`/items/${product.id}`}>{product.title}</Link></p>)
        })}
       
        </>
    );
}

export default ProductList;