import React from 'react';
import Image from './Image';
import './App.css';

const ImageList = (props) => {
    console.log(props.images);
    const images = props.images.map((image) => (
        <Image key={image.id} image={image} />
    ));

    return <div className='image-list'>{images}</div>;
};

export default ImageList;
