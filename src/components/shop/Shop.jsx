import { useContext } from 'react';
import {ProductsContext} from "../../contexts/products.context";

const Shop = () => {
    const {products} = useContext(ProductsContext);
    return (
        <div className="shop-page">
            {products.map(({ id, title, items }) => (
                <div key={id} className="collection-preview">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <div className="preview">
                        {items
                            .filter((item, idx) => idx < 4)
                            .map((item) => (
                                <div key={item.id}>{item.name}</div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Shop;