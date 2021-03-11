
import ProductItem from '../ProductItem';

const ProductList = ({products}) => {
    return (
        <>
            {products.map(product=>{
                return (<ProductItem key={product.id} product={product} />)
            })}
        </>
    );
}

export default ProductList;