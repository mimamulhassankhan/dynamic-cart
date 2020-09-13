import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [
    {brand:'Dell',category: 'laptop'},{brand:'Lenovo',category: 'laptop'}, {brand:'Asus',category: 'laptop'},
    {brand:'Motorolla',category: 'mobile'},{brand:'Nokia',category: 'mobile'}, {brand:'Samsung',category: 'mobile'},
    {brand:'Nikkon',category: 'camera'},{brand:'Canon',category: 'camera'}, {brand:'Sony',category: 'camera'}
]

const Category = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const matchedProduct = allProducts.filter(pd => pd.category === category.toString().toLowerCase());
        setProducts(matchedProduct);
    },[category])
    return (
        <div>
            <h4>Category Name: {category}</h4>
            {
                products.map((pd, idx) => <CategoryDetail key={idx} data={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Category;