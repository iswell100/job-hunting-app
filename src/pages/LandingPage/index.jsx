import { Button, Typography } from 'antd'
import React from 'react'

const {Title} = Typography

export default function LandingPage() {
  return (
    <div>
      <Title level={1}>LandingPage..</Title>
      <Button type='primary'>Login</Button>
    </div>
  )
}
