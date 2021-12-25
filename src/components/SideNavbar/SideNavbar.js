import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {ImFire} from 'react-icons/im'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import './index.css'

import {
  SideNavbarContainer,
  TopContainer,
  HomeContainer,
  HomeText,
  TrendingContainer,
  TrendingText,
  GamingContainer,
  GamingText,
  SavedVideosContainer,
  SavedVideosText,
  BottomContainer,
  ContactUsText,
  SocialMediaIconsContainer,
  FacebookImage,
  TwitterImage,
  LinkedInImage,
  InfoContainer,
} from './styledComponents'

const SideNavbar = () => (
  <SideNavbarContainer>
    <TopContainer>
      <Link className="link-item" to="/">
        <HomeContainer>
          <AiFillHome />
          <HomeText>Home</HomeText>
        </HomeContainer>
      </Link>

      <Link className="link-item" to="/trending">
        <TrendingContainer>
          <ImFire />
          <TrendingText>Trending</TrendingText>
        </TrendingContainer>
      </Link>

      <Link className="link-item" to="/gaming">
        <GamingContainer>
          <SiYoutubegaming />
          <GamingText>Gaming</GamingText>
        </GamingContainer>
      </Link>

      <Link className="link-item" to="/saved-videos">
        <SavedVideosContainer>
          <CgPlayListAdd />
          <SavedVideosText>Saved videos</SavedVideosText>
        </SavedVideosContainer>
      </Link>
    </TopContainer>
    <BottomContainer>
      <ContactUsText>CONTACT US</ContactUsText>
      <SocialMediaIconsContainer>
        <FacebookImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <TwitterImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <LinkedInImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="lined in logo"
        />
      </SocialMediaIconsContainer>
      <InfoContainer>
        Enjoy! Now to see your channels and recommendations!
      </InfoContainer>
    </BottomContainer>
  </SideNavbarContainer>
)
export default SideNavbar
