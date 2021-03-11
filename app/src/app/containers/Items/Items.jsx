import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
import ProductInfo from '../../components/ProductInfo';
import ProductList from '../../components/ProductList'
const Items = (props) => {
    useEffect(() => {
        console.log("🚀 ~ file: Items.jsx ~ line 4 ~ Items ~ props", props)        ;
    }, []);
    return (
        <div className="items-content-page">
            <Header />
            {props.match.params.id ? <ProductInfo productId={props.match.params.id} /> : <ProductList utmInfo={props.location.search}/> }
        </div>
    );
}

export default Items;