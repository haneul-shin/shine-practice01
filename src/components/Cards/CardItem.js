
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards-item'>
        <Link className='cards-item-link' to={props.path}>
            <img
              className='cards-item-img'
              alt='Product Image'
              src={props.src}
            />
          <div className='cards-item-info'>
            <h6 className='cards-item-name'>{props.name}</h6>
            <p className='cards-item-price'>{props.price}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;