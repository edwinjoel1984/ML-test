import React, {useEffect, useState} from 'react'
import {getProductByID} from '../../services/product.service'

const ProductInfo = ({productId}) => {
console.log("🚀 ~ file: ProductInfo.jsx ~ line 4 ~ ProductInfo ~ props", productId)
    const [productInformation, setProductInformation] = useState({});
    const [notFound, setNotFound] = useState(false);
    useEffect(() => {
        async function getProductInformation() {
            try{
                const response = await getProductByID(productId);
                setProductInformation(response.data.item);
            }catch(e){
                console.log(e)
                setNotFound(true);
            }
        }
        if (productId) 
            getProductInformation();
    }, [productId])
    return (
        <>
        {
            notFound ? <h2>Not Found</h2> : <h2>Info - {productInformation.title}</h2>
        }
        </>
        
    );
}

export default ProductInfo;