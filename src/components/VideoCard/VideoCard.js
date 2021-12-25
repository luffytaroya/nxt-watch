import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'

import './index.css'

import {
  VideoContainer,
  VideoThumbnail,
  VideotextContainer,
  ChannelImage,
  AllTextContainer,
  Title,
  Name,
  ViewsAndHoursCon,
  ViewCount,
  Date,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    thumbnailUrl,
    title,
    channelProfileImageUrl,
    channelName,
    viewCount,
    publishedAt,
  } = videoDetails

  return (
    <VideoContainer>
      <Link to={`/videos/${id}`} className="link">
        <VideoThumbnail src={thumbnailUrl} alt={title} />
        <VideotextContainer>
          <ChannelImage src={channelProfileImageUrl} alt="profile" />
          <AllTextContainer>
            <Title>{title}</Title>
            <Name>{channelName}</Name>
            <ViewsAndHoursCon>
              <ViewCount>{viewCount} views</ViewCount>
              <BsDot />
              <Date>{publishedAt}</Date>
            </ViewsAndHoursCon>
          </AllTextContainer>
        </VideotextContainer>
      </Link>
    </VideoContainer>
  )
}

export default VideoCard
