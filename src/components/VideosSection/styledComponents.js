import styled from 'styled-components'

export const Container = styled.ul`
  width: 85vw;
  height: 100%;
  background-color: #e2e8f0;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  list-style: none;
`
export const SearchInput = styled.input`
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 30px;
  width: 350px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin: 30px;
  outline: none;
`
export const BgVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e2e8f0;
`

export const VideoSectionLoader = styled.div`
  width: 85vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BannerContainer = styled.div`
    background-image:url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png")
    background-size:cover;
    width:80%;
    height:300px;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    padding:30px;
    display:${closeBanner => (closeBanner ? 'none' : 'block')}
`

export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const BannerDescription = styled.p`
  font-size: 12px;
`
export const BannerButton = styled.button`
  border: solid black 1px;
  color: black;
  padding: 5px 10px 5px 10px;
  background-color: #f9f9f9;
  margin-right: 30px;
  font-weight: 500;
  width: 120px;
  height: 40px;
`

export const CrossButton = styled.button`
  border: solid black 0px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;
`
export const BannerLogo = styled.img`
  width: 130px;
  height: 30px;
`
