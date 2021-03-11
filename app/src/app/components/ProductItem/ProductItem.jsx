import './ProductItem.scss';
import { Link } from 'react-router-dom';
import {formatPrice} from '../../utils'
const ProductItem = ({product}) => {
    const { title, price, address, thumbnail, currency_id, id } = product;  
    return (
        <div className="product">
            
                <Link to={`/items/${id}`}><img src={thumbnail} alt={title} className="product__image"  /></Link>
                <div className="product__detail">
                    <p className="product__detail__price">
                        {formatPrice(currency_id,price)}
                    </p>
                    <p className="product__detail__title">
                    <Link to={`/items/${id}`}>{title}</Link>
                    </p>
                </div>
                {/* <div className="product__other"> */}
                    <address className="product__city">
                        {address.city_name}
                    </address>
                {/* </div> */}
            </div>
        
    );
}

export default ProductItem;