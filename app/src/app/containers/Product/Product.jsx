import React, {useEffect, useState} from 'react'
import { Helmet } from "react-helmet";

//Components
import Header from '../../components/Header'
import ProductInfo from '../../components/ProductInfo';
import Metadata from '../../components/Metadata';

//Services
import { getProductByID, getProductDescriptionByID } from '../../services/product.service';

const Product = (props) => {
    const [productInformation, setProductInformation] = useState({});
    const [notFound, setNotFound] = useState(false);
    const [seoInfo, setSEOInfo] = useState({title: '', description: '', image: null});
    useEffect(() => {
        async function getProductInformation() {
            try{
                const [{ data: product }, { data: description }] = await Promise.all([
                    getProductByID(props.match.params.id),
                    getProductDescriptionByID(props.match.params.id),
                ]);
                setProductInformation(product.item);
                setSEOInfo({title: product.item.title, description: description.description.plain_text, image: product.item.thumbnail });

            }catch(e){
                if(e.response.status === 404)
                    setNotFound(true);
            }
        }
        if (props.match.params.id) 
            getProductInformation();
    }, [props.match.params.id]);

    const searchItem = (q) =>{
        props.history.push(`/items?search=${q}`)
    }
    return (
        <div className="items-content-page">
            <Header searchItem={searchItem}/>
            <Metadata seoInfo={seoInfo}/>
            <ProductInfo productInformation={productInformation}/>
        </div>
    );
}

export default Product;