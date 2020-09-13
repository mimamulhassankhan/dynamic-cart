import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Category from '../Category/Category';

const Home = () => {
    const [category] = useContext(CategoryContext);
    return (
        <div>
            <h3>This is home: {category}</h3>
            <Category/>
        </div>
    );
};

export default Home;