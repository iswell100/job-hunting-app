import React from 'react'
import LandingPageTemplate from '../../components/templates/LandingPageTemplate'
import Hero from '../../components/organisms/Hero'
import Testimony from '../../components/organisms/Testimony'
import Category from '../../components/organisms/Category'
import BannerSignUp from '../../components/organisms/BannerSignUp'
import FeaturedJobs from '../../components/organisms/FeaturedJobs'
import LatestJobs from '../../components/organisms/LatestJobs'

export default function LandingPage() {

  return (
    <LandingPageTemplate>
      <Hero />
      <Testimony />
      <Category />
      <BannerSignUp />
      <FeaturedJobs />
      <LatestJobs />
    </LandingPageTemplate>
  )
}
