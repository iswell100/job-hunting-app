import React from 'react'

import {AiOutlineArrowRight} from 'react-icons/ai'

import './style.css'
import CategoryItem from './CategoryItem'

export default function Category() {
  return (
    <div className='category-wrapper'>
      <div className='category-header'>
        <div className='title'>
          Explore by <span>category</span>
        </div>
        <div className='btn-detail'>
          Show All Jobs
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className='category-content'>
        <CategoryItem />
      </div>
    </div>
  )
}
