import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header/Header'
import SideNavbar from '../SideNavbar/SideNavbar'

import {
  VideoDetailsContainer,
  VidDetailsContainer,
  VideoPlayerContainer,
  AllVideoDetails,
  VideoDetailsTitle,
  ViewsLikesContainer,
  ViewsYearsContainer,
  Views,
  VideoPublished,
  LikesContainer,
  LikeButton,
  DislikeButton,
  SaveButton,
  HorizontalLine,
  VideoProfileDescriptionCon,
  VideoProfileImage,
  ChannelNameAndDescriptionCon,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVidData()
  }

  getVidData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        id: fetchedData.video_details.id,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        channelName: fetchedData.video_details.channel.name,
        profileImageUrl: fetchedData.video_details.channel.profile_image_url,
        subscriberCount: fetchedData.video_details.channel.subscriber_count,
        viewCount: fetchedData.video_details.view_count,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  saveVideos = () => {
    const {videoDetails} = this.state
    const savedVideosList = localStorage.getItem('savedVideos')
    if (savedVideosList === null) {
      const savedVideoData = [videoDetails]
      localStorage.setItem('savedVideos', JSON.stringify(savedVideoData))
    } else {
      const savedVideos = localStorage.getItem('savedVideos')
      const parsedSavedVideosData = JSON.parse(savedVideos)
      parsedSavedVideosData.push(videoDetails)
      localStorage.setItem('savedVideos', JSON.stringify(parsedSavedVideosData))
    }

    console.log(savedVideosList)
  }

  renderSuccessView = () => {
    const {videoDetails} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      profileImageUrl,
      channelName,
      subscriberCount,
      description,
    } = videoDetails
    return (
      <VideoPlayerContainer>
        <ReactPlayer url={videoUrl} width="100%" />
        <AllVideoDetails>
          <VideoDetailsTitle>{title}</VideoDetailsTitle>
          <ViewsLikesContainer>
            <ViewsYearsContainer>
              <Views>{viewCount} views</Views>
              <BsDot />
              <VideoPublished>{publishedAt}</VideoPublished>
            </ViewsYearsContainer>
            <LikesContainer>
              <LikeButton>
                <BiLike /> Like
              </LikeButton>
              <DislikeButton>
                <BiDislike /> Dislike
              </DislikeButton>
              <SaveButton onClick={this.saveVideos}>
                <CgPlayListAdd /> Save
              </SaveButton>
            </LikesContainer>
          </ViewsLikesContainer>
          <HorizontalLine />
          <VideoProfileDescriptionCon>
            <VideoProfileImage src={profileImageUrl} />
            <ChannelNameAndDescriptionCon>
              <ChannelName>{channelName}</ChannelName>
              <ChannelSubscribers>
                {subscriberCount} Subscribers
              </ChannelSubscribers>
              <ChannelDescription>{description}</ChannelDescription>
            </ChannelNameAndDescriptionCon>
          </VideoProfileDescriptionCon>
        </AllVideoDetails>
      </VideoPlayerContainer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <div>Failure</div>

  renderAllVideoDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <VideoDetailsContainer>
          <SideNavbar />
          <VidDetailsContainer>
            {this.renderAllVideoDetails()}
          </VidDetailsContainer>
        </VideoDetailsContainer>
      </>
    )
  }
}
export default VideoDetails
