import React from 'react';
import { useParams } from 'react-router-dom';

const SingleItemDisplay = ({ productCategory }) => {
  const { _id } = useParams();
  console.log(_id)
  return (
    <div>
      {/* {products.filter(product => product.name === name).map((product, index) => (
        <div key={index}>
          <h1>{product.name}</h1>
          <img width='200px' src={product.image} alt='product' />
        </div>
      ))} */}
      <h1>{_id}</h1>
      <h1>{productCategory}</h1>
      {/* <h1>{productCategory.name}</h1> */}
      {/* <h1>{productCategory._id}</h1> */}
    </div>
  )
}

export default SingleItemDisplay;