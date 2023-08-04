import React from 'react'

export default function JobItem({name, type, location, jobType, categories}) {
  return (
    <div className='job-item'>
        <div className='logo'>
            <img src="/images/company2.png" alt="/images/company2.png" />
        </div>
        <div className='display'>
            <div className='name'>{name}</div>
            <div className='location'>{type} . {location}</div>
            <div className='tag'>
                <div className=''>
                    <span>{jobType}</span>
                </div>
                {categories?.map((item, i) => (
                    <span key={i} className='category'>{item}</span>
                ))}
            </div>
        </div>
    </div>
  )
}
