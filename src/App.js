import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm/LoginForm'
import Home from './components/Home/Home'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import VideoDetails from './components/VideoDetails/VideoDetails'
import Trending from './components/Trending/Trending'
import Gaming from './components/Gaming/Gaming'
import SavedVideos from './components/SavedVideos/SavedVideos'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/trending" component={Trending} />
    <ProtectedRoute exact path="/gaming" component={Gaming} />
    <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
    <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
  </Switch>
)

export default App
