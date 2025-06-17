import { demoData } from "../demo_data";
import ProductCard from "./ProductCard";
import '../App.css';

export default function ProductList () {
    const productLst = demoData.map((productItem, index) => {
        return <ProductCard key={index} data={productItem} />
    })
    
    return (
        <div className="product__list">
            {productLst}
        </div>
    )
}