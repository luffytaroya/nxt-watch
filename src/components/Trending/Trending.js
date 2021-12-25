import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {ImFire} from 'react-icons/im'
import {BsDot} from 'react-icons/bs'

import './index.css'

import Header from '../Header/Header'

import SideNavbar from '../SideNavbar/SideNavbar'

import {
  NavAndTrendingCon,
  TrendingBgContainer,
  TrendingHeadingContainer,
  TrendingHeadingText,
  TrendingContainer,
  TrendingImage,
  AllTrendingText,
  TrendingTitle,
  TrendingChannelName,
  TrendingLastcon,
  TrendingViews,
  TrendingVideoPublished,
  TrendingLoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideoDetails: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getAlltrendingVids()
  }

  getAlltrendingVids = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        channelName: each.channel.name,
        ChannelProfileImageUrl: each.channel.profile_image_url,
        ViewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        trendingVideoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <TrendingLoaderContainer>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </TrendingLoaderContainer>
  )

  renderFailureView = () => <h1>hello</h1>

  renderTrendingVideos = () => {
    const {trendingVideoDetails} = this.state

    return (
      <>
        <Header />
        <NavAndTrendingCon>
          <SideNavbar />
          <TrendingBgContainer>
            <TrendingHeadingContainer>
              <ImFire />
              <TrendingHeadingText>Trending</TrendingHeadingText>
            </TrendingHeadingContainer>
            {trendingVideoDetails.map(each => (
              <TrendingContainer key={each.id}>
                <Link className="link-element" to={`/videos/${each.id}`}>
                  <TrendingImage src={each.thumbnailUrl} />
                  <AllTrendingText>
                    <TrendingTitle>{each.title}</TrendingTitle>
                    <TrendingChannelName>
                      {each.channelName}
                    </TrendingChannelName>
                    <TrendingLastcon>
                      <TrendingViews>{each.viewCount} views</TrendingViews>
                      <BsDot />
                      <TrendingVideoPublished>
                        {each.publishedAt}
                      </TrendingVideoPublished>
                    </TrendingLastcon>
                  </AllTrendingText>
                </Link>
              </TrendingContainer>
            ))}
          </TrendingBgContainer>
        </NavAndTrendingCon>
      </>
    )
  }

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}

export default Trending
