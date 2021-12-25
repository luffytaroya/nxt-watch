import {Link} from 'react-router-dom'

import {ImFire} from 'react-icons/im'
import {BsDot} from 'react-icons/bs'

import './index.css'

import Header from '../Header/Header'

import SideNavbar from '../SideNavbar/SideNavbar'

import {
  NavAndSavedCon,
  SavedBgContainer,
  SavedHeadingContainer,
  SavedHeadingText,
  SavedContainer,
  SavedImage,
  AllSavedText,
  SavedTitle,
  SavedChannelName,
  SavedLastcon,
  SavedViews,
  SavedVideoPublished,
} from './styledComponents'

const SavedVideos = () => {
  const savedVideos = localStorage.getItem('savedVideos')
  const savedVideosList = JSON.parse(savedVideos)

  if (savedVideos.length === 0) {
    return <h1>0</h1>
  }
  return (
    <>
      <Header />
      <NavAndSavedCon>
        <SideNavbar />
        <SavedBgContainer>
          <SavedHeadingContainer>
            <ImFire />
            <SavedHeadingText>Saved Videos</SavedHeadingText>
          </SavedHeadingContainer>
          {savedVideosList.map(each => (
            <SavedContainer key={each.id}>
              <Link className="link-saved-element" to={`/videos/${each.id}`}>
                <SavedImage src={each.thumbnailUrl} />

                <AllSavedText>
                  <SavedTitle>{each.title}</SavedTitle>
                  <SavedChannelName>{each.channelName}</SavedChannelName>
                  <SavedLastcon>
                    <SavedViews>{each.viewCount} views</SavedViews>
                    <BsDot />
                    <SavedVideoPublished>
                      {each.publishedAt}
                    </SavedVideoPublished>
                  </SavedLastcon>
                </AllSavedText>
              </Link>
            </SavedContainer>
          ))}
        </SavedBgContainer>
      </NavAndSavedCon>
    </>
  )
}

export default SavedVideos
