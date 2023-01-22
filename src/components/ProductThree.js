import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const ProductThree = ({ img, promo, name, price, oldPrice, desc, id }) => {
  return (
    <Wrapper>
      <div className='container'>
        <Link to={`/products/${id}`} className='link'>
          <img src={img} alt='' />
        </Link>

        <footer>
          <h5 className='name'>{name}</h5>
          <p className='desc'>{desc.substring(0, 50)}</p>
          <div className='price-details'>
            <h5 className='old-price'>{formatPrice(oldPrice)}</h5>
            <h5 className='price'>{formatPrice(price)}</h5>
          </div>
          <h6 className='promo'>{promo}</h6>
        </footer>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .container {
    position: relative;
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .name {
  }
  .price-details {
    display: flex;
    gap: 5rem;
  }
  .old-price {
    text-decoration: line-through;
  }
  .price {
    color: var(--clr-primary-9);
  }

  footer {
    position: relative;
  }
  .promo {
    position: absolute;
    top: -15rem;
    left: 10rem;
    background: var(--clr-primary-9);
    text-transform: uppercase;
    color: white;
    font-size: 1rem;
    clip-path: polygon(100% 0, 100% 120%, 10% 120%, 0 0%);
  }
`
export default ProductThree