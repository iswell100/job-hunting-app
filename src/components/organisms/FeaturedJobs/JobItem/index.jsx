import React from 'react'

export default function JobItem({jobType, name, type, location, desc, categories}) {
  return (
    <div className='featured-item'>
      <div className='logo-tag'>
        <img src="/images/company.png" alt="/images/company.png" />
        <span className='tag'>{jobType}</span>
      </div>
      <div className='detail'>
        <div className='name'>{name}</div>
        <div className='location'>{type} | {location}</div>
        <div className='desc'>
          {desc}
        </div>
      </div>
      <div className='category-flex'>
        {categories.map((item, i) => (
          <span key={i} className='category'>{item}</span>
        ))}
      </div>
    </div>
  )
}
