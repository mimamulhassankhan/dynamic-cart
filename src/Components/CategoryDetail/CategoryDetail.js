import React from 'react';

const CategoryDetail = ({data}) => {
    const {brand, category} = data;
    return (
        <div>
            <h5>{category}: {brand}</h5>
        </div>
    );
};

export default CategoryDetail;