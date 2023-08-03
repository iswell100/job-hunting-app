import React, { useEffect } from 'react'

import './style.css'
import CategoryItem from './CategoryItem'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../../redux/category/action'
import ContentHeader from '../../atoms/ContentHeader'

export default function Category() {
  const {categories} = useSelector((state) => state.category);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories());
  }, []);


  return (
    <div className='category-wrapper'>
      <ContentHeader word1={"Explore by"} word2={"category"} />
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
