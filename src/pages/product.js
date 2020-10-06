import React from 'react';
import ItemDescription from '../components/itemDescription';
import { data } from '../data/testData1';

const Product = (props) => {
    // need to query database by ID and render properties
    const product = data.find(el => el._id === parseInt(props.match.params.id));

    return (
        <>
        <ItemDescription {...product} />
        </>
    );
};

export default Product;