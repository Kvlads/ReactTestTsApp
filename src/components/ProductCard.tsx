import { productDataInterface, productInfoInterface } from "../types";
import '../App.css';

export default function ProductCard (props: productDataInterface) {
    const { imageUrl, origin, price, title, currency } = props.data

    const formattedPrice = Intl.NumberFormat("ru-RU", { style: "currency", currency }).format(price)

    return (
        <div className="product">
            <img src={imageUrl} alt="" className="product__image" />
            <div className="product__info">
                <div className="product__origin">{origin}</div>{}
                <div className="product__price">{formattedPrice}</div>
            </div>
            <div className="product__title">{title}</div>
        </div>
    )
}