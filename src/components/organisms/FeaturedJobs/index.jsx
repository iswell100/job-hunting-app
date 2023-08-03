import React, { useEffect } from 'react'

import ContentHeader from '../../atoms/ContentHeader'
import JobItem from './JobItem';

import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { getFeaturedJobs } from '../../../redux/featuredJob/action';

export default function FeaturedJobs() {
    const {jobs} = useSelector((state) => state.featuredJob)
    const dispatch = useDispatch()

    console.log(jobs);

    useEffect(() => { dispatch(
        getFeaturedJobs())
    }, [])

  return (
    <div className='featured-wrapper'>
      <ContentHeader word1={"Featured"} word2={"jobs"} />
      <div className='featured-content'>
        {jobs.map((item, i) => (
          <JobItem name={item.name} jobType={item.jobType} type={item.type} location={item.location} categories={item.categories} desc={item.desc} key={i} />
        ))}
      </div>
    </div>
  )
}
