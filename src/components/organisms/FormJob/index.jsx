import React from 'react'

import './style.css'
import { Button, Input } from 'antd'

export default function FormJob() {
  return (
    <div className='formjob-wrapper'>
      <div className='form-job'>
        <div className='form-field'>
          <img style={{ width: '20px' }} src="./images/search.svg" alt="Search" />
          <Input className='input-custom' placeholder='Job title or keyword'/>
        </div>        
        <div className='form-field'>
          <img style={{ width: '20px' }} src="./images/location.svg" alt="Location" />
          <Input className='input-custom' placeholder='Job title or keyword'/>
        </div>
        <Button className='button-search' type='primary'>
          Searh my Job
        </Button>
      </div>    
      <div className='form-job-description'>
        Popular : UI Designer, UX Researcher, Android, Admin
      </div>
    </div>
  )
}
