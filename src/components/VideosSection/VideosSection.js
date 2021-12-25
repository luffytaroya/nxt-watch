import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {RiCloseFill} from 'react-icons/ri'

import VideoCard from '../VideoCard/VideoCard'

import {
  Container,
  SearchInput,
  BgVideosContainer,
  VideoSectionLoader,
  BannerContainer,
  BannerTextContainer,
  BannerDescription,
  BannerButton,
  CrossButton,
  BannerLogo,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideosSection extends Component {
  state = {
    allVideos: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    closeBanner: false,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  closeBannerContainer = () => this.setState({closeBanner: true})

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  getAllVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/all?search='
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channelName: video.channel.name,
        channelProfileImageUrl: video.channel.profile_image_url,
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        allVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderAllVideos = () => {
    const {allVideos, searchInput, closeBanner} = this.state

    const searchResults = allVideos.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <BgVideosContainer>
        <BannerContainer closeBanner={closeBanner}>
          <BannerTextContainer>
            <BannerLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
            <BannerDescription>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerDescription>
            <BannerButton>GET IT NOW</BannerButton>
          </BannerTextContainer>
          <CrossButton onClick={this.closeBannerContainer}>
            <RiCloseFill />
          </CrossButton>
        </BannerContainer>
        <SearchInput
          type="text"
          onChange={this.onChangeSearchInput}
          value={searchInput}
          placeholder="Search"
        />
        <Container>
          {searchResults.map(each => (
            <VideoCard key={each.id} videoDetails={each} />
          ))}
        </Container>
      </BgVideosContainer>
    )
  }

  renderLoadingView = () => (
    <VideoSectionLoader>
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </VideoSectionLoader>
  )

  renderFailureView = () => <h1>hello</h1>

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderAllVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }
}
export default VideosSection
