import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header/Header'

import SideNavbar from '../SideNavbar/SideNavbar'

import {
  NavbarAndGameContainer,
  GamingContainer,
  GameCard,
  GameCardImage,
  GameName,
  Gametext,
  GamingLoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideoDetails: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getAllGamingVids()
  }

  getAllGamingVids = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        ViewCount: each.view_count,
      }))
      this.setState({
        gamingVideoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <GamingLoaderContainer>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </GamingLoaderContainer>
  )

  renderFailureView = () => <h1>hello</h1>

  renderGamingVideos = () => {
    const {gamingVideoDetails} = this.state

    return (
      <>
        <Header />
        <NavbarAndGameContainer>
          <SideNavbar />
          <GamingContainer>
            {gamingVideoDetails.map(each => (
              <GameCard key={each.id}>
                <GameCardImage src={each.thumbnailUrl} />
                <GameName>{each.title}</GameName>
                <Gametext>{each.ViewCount} Watching Worldwide</Gametext>
              </GameCard>
            ))}
          </GamingContainer>
        </NavbarAndGameContainer>
      </>
    )
  }

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}

export default Gaming
