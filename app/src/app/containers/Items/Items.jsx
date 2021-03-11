import React, {useEffect, useState} from 'react'
import Header from '../../components/Header'
//Components
import Metadata from '../../components/Metadata';
import ProductList from '../../components/ProductList'

//Services
import { getProducts } from '../../services/product.service';

const Items = (props) => {
    const [products, setProducts] = useState([]);
    const [seoInfo, setSEOInfo] = useState({title: '', categories: [], description: '', image: null});
    useEffect(() => {
        async function getAllProducts() {
            const urlParams = new URLSearchParams(window.location.search);
            const search = urlParams.get('search');
            if(search){
                const response = await getProducts(search);
                setProducts(response.data.items);
                const categories = response.data.categories;
                const description = `Encuentra ${search} ${categories.length ? '-'+ categories[0] : ''} en MercadoLibre.com.co! Entre y conozca nuestras increíbles ofertas y promociones. Descubre la mejor forma de comprar online.`;
                setSEOInfo({title: search, categories, description, image: null });
            }
        }
        getAllProducts();
    }, [props.location]);

    const searchItem = (q) =>{
        console.log(q);
        props.history.push(`/items?search=${q}`)
    }
    return (
        <div className="items-content-page">
            <Metadata seoInfo={seoInfo} />
            <Header searchItem={searchItem} currentValue={seoInfo.title} />
            <ProductList products={products}/> 
        </div>
    );
}

export default Items;