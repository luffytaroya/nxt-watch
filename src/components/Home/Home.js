import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import Header from '../Header/Header'

import SideNavbar from '../SideNavbar/SideNavbar'
import VideosSection from '../VideosSection/VideosSection'

import {HomeContainer} from './styledComponents'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <HomeContainer>
        <SideNavbar />
        <VideosSection />
      </HomeContainer>
    </>
  )
}

export default Home
