import React from 'react'
import { TbTruckDelivery, TbPackage } from 'react-icons/tb'
import { RiInkBottleLine } from 'react-icons/ri'

import { FaLock, FaHandHoldingHeart } from 'react-icons/fa'


const LastCategories = () => {
  return (
    <>
      <div className=' last-categories-last'>
        <div className='section-center'>
          <div className='container-last-categories'>
            <article>
              <TbTruckDelivery className='icon-last' />
              <h3>livraison gratuite des 30.000CFA</h3>
            </article>
            <article>
              <RiInkBottleLine className='icon-last' />
              <h3>échantillions offerts</h3>
            </article>
            <article>
              <TbPackage className='icon-last' />
              <h3>emballage cadeau gratuit</h3>
            </article>
            <article>
              <FaLock className='icon-last' />
              <h3>paiement sécurisé</h3>
            </article>
            <article>
              <FaHandHoldingHeart className='icon-last' />
              <h3>cadeau de fidélité</h3>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

export default LastCategories