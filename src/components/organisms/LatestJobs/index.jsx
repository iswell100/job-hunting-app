import React, { useEffect } from 'react'

import './style.css'
import ContentHeader from '../../atoms/ContentHeader'
import JobItem from './JobItem'
import { useDispatch, useSelector } from 'react-redux'
import { getLatestJobs } from '../../../redux/latestJob/action'

export default function LatestJobs() {
  const { jobs } = useSelector((state) => state.latestJob)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLatestJobs())
  }, [])

  return (
    <div className='job-wrapper'>
      <ContentHeader word1={'Latest'} word2={'jobs open'} />
      <div className='job-content'>
        {jobs.map((item, i) => (
          <JobItem {...item} 
          key={i}
           />
        ))}
      </div>
    </div>
  )
}
