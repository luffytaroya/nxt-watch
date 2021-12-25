import styled from 'styled-components'

export const NavbarAndGameContainer = styled.div`
  display: flex;
`

export const GamingContainer = styled.div`
  padding: 20px;
  overflow-y: scroll;
  width: 85vw;
  display: flex;
  flex-wrap: wrap;
  width: 85vw;
  height: 100%;
  background-color: #e2e8f0;
`
export const GameCard = styled.div`
  width: 200px;
  height: 400px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`

export const GameCardImage = styled.img`
  width: 200px;
  height: 350px;
`
export const GameName = styled.h1`
  font-size: 16px;
`
export const Gametext = styled.p`
  font-size: 12px;
`
export const GamingLoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
