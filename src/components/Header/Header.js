import {Link} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'

import {
  HeaderContainer,
  ImageLogo,
  IconsContainer,
  ProfileIcon,
  LogoutButton,
  MoonIcon,
} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <ImageLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="logo"
      />
    </Link>

    <IconsContainer>
      <MoonIcon>
        <FaMoon />
      </MoonIcon>

      <ProfileIcon
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
        alt="profile"
      />
      <LogoutButton>Logout</LogoutButton>
    </IconsContainer>
  </HeaderContainer>
)

export default Header
