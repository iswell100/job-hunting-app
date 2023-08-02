import React, { useEffect } from 'react'

import {AiOutlineArrowRight} from 'react-icons/ai'

import './style.css'
import CategoryItem from './CategoryItem'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../redux/category/action'

export default function Category() {
  const {categories} = useSelector((state) => state.category);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories());
  }, []);


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
        {categories.map((item, i) => (
          <CategoryItem 
            icon='/images/category.png'
            name={item.name}
            totalJobs={item.totalJobs}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}
