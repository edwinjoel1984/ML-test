import React, {useEffect, useState} from 'react'

//Components
import Header from '../../components/Header'
import ProductInfo from '../../components/ProductInfo';
import Metadata from '../../components/Metadata';

//Styles
import './Product.scss';

//Services
import { getProductByID, getProductDescriptionByID } from '../../services/product.service';

const Product = (props) => {
    const [productInformation, setProductInformation] = useState();
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
                console.error(e)
            }
        }
        if (props.match.params.id) 
            getProductInformation();
    }, [props.match.params.id]);

    const searchItem = (q) =>{
        props.history.push(`/items?search=${q}`)
    }
    return (
        <div className="product-content-page">
            <Metadata seoInfo={seoInfo}/>
            <Header searchItem={searchItem}/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ProductInfo productInformation={{...productInformation, description: seoInfo.description}}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Product;