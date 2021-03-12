import Carousel from "nuka-carousel";
import { formatPrice } from '../../utils'
import './ProductInfo.scss'
const ProductInfo = ({productInformation}) => {
    const slickSettings = {
        autoplay: true,
        withoutControls: true
      };
    const getStatusProduct = () =>{
        const statusProduct = productInformation.attributes.find(item=>item.id==="ITEM_CONDITION")
        if(statusProduct)
            return `${statusProduct.value_name} - `;
        return '';
    }
    return (
        <div className="product-container">
        {productInformation.id && (
            <>
            <div className="general-information">
                <div className="general-information__image">
                    <Carousel {...slickSettings}>
                        {productInformation.pictures.map(img=>{
                            return <div key={img.id}><img src={img.secure_url} alt={productInformation.title} className="general-information__image" /></div>
                        })}
                    </Carousel>
                </div>
                <div>
                <h2 className="general-information__headline">Descripción del Producto</h2>
                <p className="general-information__description">{productInformation.description}</p>
                </div>
            </div>
            <div className="price-information">
                <p className="price-information__status-sold">{`${getStatusProduct()}  ${productInformation.sold_quantity} Vendidos`}</p>
                <h2 className="price-information__title">{productInformation.title}</h2>
                <div className="price-information__img-no-desktop">
                    <Carousel {...slickSettings}>
                        {productInformation.pictures.map(img=>{
                            return <div key={img.id}><img src={img.secure_url} alt={productInformation.title}  /></div>
                        })}
                    </Carousel>
                </div>
                <p className="price-information__value">{formatPrice(productInformation.currency_id, productInformation.price)}</p>
                <button className="price-information__btn-buy">Comprar</button>
            </div>
            </>
        )}
        </div>
        
    );
}

export default ProductInfo;