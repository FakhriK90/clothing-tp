import { useContext } from 'react';
import {ProductsContext} from "../../contexts/products.context";
import ShopItem from '../shop-item/ShopItem';
import './shop.styles.scss';

const Shop = () => {
    const {products} = useContext(ProductsContext);
    return (
        <div className="shop-page">
            {products.map(category => (
                category.items.map(item => (
                    console.log(item),
                    <ShopItem key={item.id} item={item} />
                ))
            ))}
        </div>
    );
}

export default Shop;